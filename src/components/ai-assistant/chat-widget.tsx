"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bot,
  X,
  Send,
  Sparkles,
  RotateCcw,
  ExternalLink,
  Github,
  ChevronDown,
  User,
  ShieldCheck,
  Loader2,
  HelpCircle,
} from "lucide-react";

interface MessageSource {
  title: string;
  link?: string;
  githubUrl?: string;
}

interface ChatMessage {
  id: string;
  sender: "user" | "assistant";
  text: string;
  timestamp: string;
  sources?: MessageSource[];
}

const STARTER_QUESTIONS = [
  "What Java backend projects has he built?",
  "Explain the PayNova GRC project",
  "Tell me about his HCLTech experience",
  "What are his 4 verified certifications?",
  "Which projects use AWS and Docker?",
];

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputQuery, setInputQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  // Auto-scroll to bottom of conversation
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isLoading, isOpen]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 150);
    }
  }, [isOpen]);

  // Keyboard shortcut: Escape to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const handleSendMessage = async (queryText?: string) => {
    const textToSend = queryText || inputQuery;
    if (!textToSend.trim() || isLoading) return;

    setErrorMsg(null);
    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: "user",
      text: textToSend.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!queryText) setInputQuery("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: textToSend.trim() }),
      });

      const data = await response.json();

      if (!response.ok || data.error) {
        throw new Error(data.error || "Failed to reach AI assistant.");
      }

      const assistantMsg: ChatMessage = {
        id: `ai-${Date.now()}`,
        sender: "assistant",
        text: data.answer,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        sources: data.sources,
      };

      setMessages((prev) => [...prev, assistantMsg]);
    } catch (err: any) {
      console.error("Chat error:", err);
      setErrorMsg(
        err.message || "The AI assistant is temporarily unavailable. Please explore the portfolio directly."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const clearChat = () => {
    setMessages([]);
    setErrorMsg(null);
  };

  // Enhanced markdown renderer for bold, links, code, and headings
  const renderFormattedText = (text: string) => {
    const lines = text.split("\n");

    return lines.map((line, lineIdx) => {
      const trimmed = line.trim();
      if (!trimmed) {
        return <div key={lineIdx} className="h-1.5" />;
      }

      // Heading 3 (###)
      if (trimmed.startsWith("### ")) {
        return (
          <h4 key={lineIdx} className="text-sm font-bold text-slate-900 dark:text-white mt-2 mb-1 flex items-center gap-1.5">
            {trimmed.replace(/^###\s+/, "")}
          </h4>
        );
      }

      // Process inline elements (bold, links, code)
      const parseInline = (content: string) => {
        // Regex tokens: [text](url), **bold**, `code`, *italic*
        const tokenRegex = /\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*|`([^`]+)`|\*([^*]+)\*/g;
        const elements = [];
        let lastIndex = 0;
        let match;

        while ((match = tokenRegex.exec(content)) !== null) {
          if (match.index > lastIndex) {
            elements.push(content.substring(lastIndex, match.index));
          }

          if (match[1] && match[2]) {
            // Markdown Link [text](url)
            const isExternal = match[2].startsWith("http");
            elements.push(
              <a
                key={`link-${match.index}`}
                href={match[2]}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                className="text-blue-600 dark:text-blue-400 hover:underline font-semibold inline-flex items-center gap-0.5"
              >
                <span>{match[1]}</span>
                {isExternal && <ExternalLink className="w-3 h-3 inline" />}
              </a>
            );
          } else if (match[3]) {
            // Bold **text**
            elements.push(
              <strong key={`bold-${match.index}`} className="font-bold text-slate-900 dark:text-white">
                {match[3]}
              </strong>
            );
          } else if (match[4]) {
            // Inline Code `code`
            elements.push(
              <code
                key={`code-${match.index}`}
                className="px-1.5 py-0.5 rounded text-[11px] font-mono bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200"
              >
                {match[4]}
              </code>
            );
          } else if (match[5]) {
            // Italic *text*
            elements.push(
              <em key={`italic-${match.index}`} className="italic text-slate-600 dark:text-slate-300">
                {match[5]}
              </em>
            );
          }

          lastIndex = match.index + match[0].length;
        }

        if (lastIndex < content.length) {
          elements.push(content.substring(lastIndex));
        }

        return elements.length > 0 ? elements : content;
      };

      const isBullet = trimmed.startsWith("• ") || trimmed.startsWith("- ");
      const lineContent = isBullet ? trimmed.replace(/^[•-]\s+/, "") : line;

      return (
        <div key={lineIdx} className={isBullet ? "flex items-start gap-1.5 pl-1.5 my-0.5" : "my-0.5"}>
          {isBullet && <span className="text-blue-500 font-bold shrink-0 mt-0.5">•</span>}
          <div className="flex-1">{parseInline(lineContent)}</div>
        </div>
      );
    });
  };

  return (
    <>
      {/* 1. Floating Launch Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close AI Portfolio Assistant" : "Open AI Portfolio Assistant"}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`flex items-center gap-2 px-4 py-3 rounded-full font-medium text-xs sm:text-sm shadow-xl transition-all duration-300 border ${
            isOpen
              ? "bg-slate-900 dark:bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-800"
              : "bg-blue-600 hover:bg-blue-700 text-white border-blue-500 shadow-blue-500/20"
          }`}
        >
          {isOpen ? (
            <>
              <X className="w-4 h-4" />
              <span>Close Assistant</span>
            </>
          ) : (
            <>
              <div className="relative">
                <Bot className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
              </div>
              <span className="font-semibold tracking-wide">Ask My Portfolio</span>
            </>
          )}
        </motion.button>
      </div>

      {/* 2. Chat Drawer Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.aside
            role="dialog"
            aria-label="AI Portfolio Assistant Window"
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.96 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed bottom-20 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[440px] h-[580px] max-h-[82vh] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Window Header */}
            <header className="p-4 bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-blue-600/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 flex items-center justify-center border border-blue-600/20">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                      AI Portfolio Assistant
                    </h3>
                    <span className="px-1.5 py-0.5 rounded text-[10px] font-mono font-medium bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-400 border border-emerald-300 dark:border-emerald-800">
                      Grounded
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">
                    Answers questions using Pranit&apos;s verified portfolio data
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1">
                {messages.length > 0 && (
                  <button
                    onClick={clearChat}
                    title="Clear Conversation"
                    aria-label="Clear Conversation"
                    className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>
                )}
                <button
                  onClick={() => setIsOpen(false)}
                  title="Minimize"
                  aria-label="Minimize Chat"
                  className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                >
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>
            </header>

            {/* Conversation Messages Container */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {/* Empty State / Starter Questions */}
              {messages.length === 0 && (
                <div className="space-y-4 py-3">
                  <div className="p-3.5 rounded-xl bg-blue-50/70 dark:bg-blue-950/30 border border-blue-200/80 dark:border-blue-900/50 space-y-1.5">
                    <p className="text-xs font-semibold text-blue-900 dark:text-blue-300 flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                      Welcome! I&apos;m Pranit&apos;s AI Portfolio Assistant.
                    </p>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      Ask me about his Java backend experience at HCLTech, GRC & cybersecurity projects, verified certifications, or technical stack.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <p className="text-[11px] font-mono uppercase tracking-wider text-slate-400 flex items-center gap-1">
                      <HelpCircle className="w-3.5 h-3.5" />
                      Suggested questions to get started:
                    </p>
                    <div className="space-y-1.5">
                      {STARTER_QUESTIONS.map((q, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleSendMessage(q)}
                          className="w-full text-left p-2.5 rounded-lg text-xs bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-blue-500/50 hover:bg-blue-50/30 dark:hover:bg-blue-950/20 transition-all focus:outline-none focus:ring-1 focus:ring-blue-500"
                        >
                          &ldquo;{q}&rdquo;
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Render Messages */}
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex gap-2.5 ${
                    msg.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  {msg.sender === "assistant" && (
                    <div className="w-7 h-7 rounded-lg bg-blue-600 text-white flex items-center justify-center shrink-0 mt-1">
                      <Bot className="w-4 h-4" />
                    </div>
                  )}

                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-xs sm:text-[13px] leading-relaxed shadow-sm ${
                      msg.sender === "user"
                        ? "bg-blue-600 text-white rounded-br-none"
                        : "bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 rounded-bl-none border border-slate-200/80 dark:border-slate-700/60"
                    }`}
                  >
                    <div>{renderFormattedText(msg.text)}</div>

                    {/* Sources / Context Indicators */}
                    {msg.sources && msg.sources.length > 0 && (
                      <div className="mt-2.5 pt-2 border-t border-slate-200 dark:border-slate-700/60 flex flex-wrap items-center gap-1.5">
                        <span className="text-[10px] font-mono text-slate-400">Sources:</span>
                        {msg.sources.slice(0, 2).map((src, sIdx) => (
                          <span
                            key={sIdx}
                            className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-mono bg-white/70 dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-300 dark:border-slate-700"
                          >
                            <span>{src.title.replace(/^(Project|Experience|Skills Category|Certification): /, "")}</span>
                            {src.githubUrl && (
                              <a
                                href={src.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-slate-500 hover:text-blue-500"
                                title="Open GitHub"
                              >
                                <Github className="w-2.5 h-2.5" />
                              </a>
                            )}
                          </span>
                        ))}
                      </div>
                    )}

                    <div
                      className={`text-[10px] font-mono mt-1 ${
                        msg.sender === "user"
                          ? "text-blue-100 text-right"
                          : "text-slate-400 text-left"
                      }`}
                    >
                      {msg.timestamp}
                    </div>
                  </div>

                  {msg.sender === "user" && (
                    <div className="w-7 h-7 rounded-lg bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200 flex items-center justify-center shrink-0 mt-1">
                      <User className="w-4 h-4" />
                    </div>
                  )}
                </div>
              ))}

              {/* Typing / Loading Indicator */}
              {isLoading && (
                <div className="flex gap-2.5 items-center">
                  <div className="w-7 h-7 rounded-lg bg-blue-600 text-white flex items-center justify-center shrink-0">
                    <Bot className="w-4 h-4" />
                  </div>
                  <div className="bg-slate-100 dark:bg-slate-800 rounded-2xl rounded-bl-none px-4 py-2.5 border border-slate-200/80 dark:border-slate-700/60 flex items-center gap-2">
                    <Loader2 className="w-3.5 h-3.5 animate-spin text-blue-500" />
                    <span className="text-xs text-slate-500 dark:text-slate-400">
                      Searching portfolio knowledge...
                    </span>
                  </div>
                </div>
              )}

              {/* Error Notice */}
              {errorMsg && (
                <div className="p-3 rounded-lg bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900/50 text-xs text-rose-700 dark:text-rose-300">
                  {errorMsg}
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input Bar */}
            <footer className="p-3 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendMessage();
                }}
                className="relative flex items-center gap-2"
              >
                <textarea
                  ref={inputRef}
                  value={inputQuery}
                  onChange={(e) => setInputQuery(e.target.value)}
                  onKeyDown={handleKeyDown}
                  rows={1}
                  maxLength={500}
                  placeholder="Ask a question about Pranit's portfolio..."
                  className="flex-1 resize-none py-2.5 pl-3.5 pr-10 text-xs rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-colors"
                />

                <button
                  type="submit"
                  disabled={!inputQuery.trim() || isLoading}
                  aria-label="Send Message"
                  className="p-2.5 rounded-xl bg-blue-600 text-white disabled:opacity-40 disabled:cursor-not-allowed hover:bg-blue-700 transition-colors shrink-0 shadow-sm"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>

              <div className="mt-1.5 flex items-center justify-between text-[10px] font-mono text-slate-400 px-1">
                <span>Press Enter to send</span>
                <span>{inputQuery.length}/500</span>
              </div>
            </footer>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}
