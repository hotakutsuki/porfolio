"use client";
import React, { useState, useEffect, useRef } from 'react';
import { supabase, DatabaseMessage } from '@/lib/supabase';

interface Message {
    id: number;
    username: string;
    content: string;
    timestamp: Date;
}

interface PublicChatProps {
    t: Record<string, string>; // Translation object
}

const generateRandomUsername = (): string => {
    const adjectives = [
        'Creative', 'Tech', 'Digital', 'Innovative', 'Smart', 'Bright', 'Clever',
        'Dynamic', 'Energetic', 'Friendly', 'Happy', 'Joyful', 'Lucky', 'Magical',
        'Mysterious', 'Peaceful', 'Powerful', 'Quick', 'Radiant', 'Serene'
    ];
    const nouns = [
        'Developer', 'Coder', 'Designer', 'Artist', 'Creator', 'Builder', 'Maker',
        'Explorer', 'Adventurer', 'Traveler', 'Dreamer', 'Thinker', 'Learner',
        'Student', 'Teacher', 'Mentor', 'Guide', 'Helper', 'Friend', 'Companion'
    ];

    const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
    const randomNumber = Math.floor(Math.random() * 1000);

    return `${randomAdjective}${randomNoun}${randomNumber}`;
};

export default function PublicChat({ t }: PublicChatProps) {
    const [messages, setMessages] = useState<Message[]>([]);
    const [newMessage, setNewMessage] = useState('');
    const [username, setUsername] = useState('');
    const [isEditingUsername, setIsEditingUsername] = useState(false);
    const [tempUsername, setTempUsername] = useState('');
    const [hasChangedUsername, setHasChangedUsername] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Generate random username on first visit
        const storedUsername = localStorage.getItem('portfolio_chat_username');
        const storedHasChanged = localStorage.getItem('portfolio_chat_has_changed');

        if (storedUsername) {
            setUsername(storedUsername);
            setHasChangedUsername(storedHasChanged === 'true');
        } else {
            const newUsername = generateRandomUsername();
            setUsername(newUsername);
            localStorage.setItem('portfolio_chat_username', newUsername);
            localStorage.setItem('portfolio_chat_has_changed', 'false');
        }

        // Load existing messages from Supabase
        loadMessages();

        // Subscribe to real-time updates
        const subscription = supabase
            .channel('portfolio_messages')
            .on('postgres_changes',
                { event: 'INSERT', schema: 'public', table: 'portfoliomessages' },
                (payload) => {
                    const newMessage = payload.new as DatabaseMessage;
                    const message: Message = {
                        id: newMessage.id,
                        username: newMessage.username,
                        content: newMessage.content,
                        timestamp: new Date(newMessage.created_at)
                    };
                    setMessages(prev => [...prev, message]);
                }
            )
            .subscribe();

        return () => {
            subscription.unsubscribe();
        };
    }, []);

    const loadMessages = async () => {
        try {
            setIsLoading(true);
            const { data, error } = await supabase
                .from('portfoliomessages')
                .select('*')
                .order('created_at', { ascending: true });

            if (error) {
                console.error('Error loading messages:', error);
                return;
            }

            if (data) {
                const formattedMessages: Message[] = data.map((msg: DatabaseMessage) => ({
                    id: msg.id,
                    username: msg.username,
                    content: msg.content,
                    timestamp: new Date(msg.created_at)
                }));
                setMessages(formattedMessages);
            }
        } catch (error) {
            console.error('Error loading messages:', error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        messagesEndRef.current?.scrollBy({
            top: messagesEndRef.current.scrollHeight,
            behavior: 'smooth'
        })
    }, [messages]);

    const handleSendMessage = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!newMessage.trim()) return;

        try {
            const { error } = await supabase
                .from('portfoliomessages')
                .insert([
                    {
                        content: newMessage.trim(),
                        username: username
                    }
                ]);

            if (error) {
                console.error('Error sending message:', error);
                return;
            }

            setNewMessage('');
        } catch (error) {
            console.error('Error sending message:', error);
        }
    };

    const handleUsernameChange = () => {
        if (!tempUsername.trim() || tempUsername === username) {
            setIsEditingUsername(false);
            setTempUsername('');
            return;
        }

        setUsername(tempUsername.trim());
        setHasChangedUsername(true);
        localStorage.setItem('portfolio_chat_username', tempUsername.trim());
        localStorage.setItem('portfolio_chat_has_changed', 'true');
        setIsEditingUsername(false);
        setTempUsername('');
    };

    const formatTime = (date: Date): string => {
        return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    };

    return (
        <div className="bg-card border border-border rounded-lg shadow-lg overflow-hidden">
            {/* Header */}
            <div className="bg-primary text-primary-foreground px-4 py-3 flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <h3 className="text-lg font-semibold">{t.chat_title}</h3>
                    <div className="flex items-center gap-1 text-xs opacity-80">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <span>Live</span>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <span className="text-sm opacity-90">as</span>
                    {isEditingUsername ? (
                        <div className="flex items-center gap-2">
                            <input
                                type="text"
                                value={tempUsername}
                                onChange={(e) => setTempUsername(e.target.value)}
                                onKeyPress={(e) => e.key === 'Enter' && handleUsernameChange()}
                                className="bg-primary-foreground text-primary px-2 py-1 rounded text-sm w-32"
                                placeholder="New username"
                                maxLength={20}
                            />
                            <button
                                onClick={handleUsernameChange}
                                className="text-xs bg-accent text-accent-foreground px-2 py-1 rounded hover:bg-accent/80 transition-colors"
                            >
                                ✓
                            </button>
                        </div>
                    ) : (
                        <button
                            onClick={() => {
                                if (!hasChangedUsername) {
                                    setIsEditingUsername(true);
                                    setTempUsername(username);
                                }
                            }}
                            className={`text-sm px-2 py-1 rounded transition-colors ${hasChangedUsername
                                ? 'opacity-50 cursor-not-allowed'
                                : 'hover:bg-primary-foreground/20'
                                }`}
                            disabled={hasChangedUsername}
                            title={hasChangedUsername ? t.chat_username_changed : t.chat_username_change}
                        >
                            {username}
                            {!hasChangedUsername && <span className="ml-1">✏️</span>}
                        </button>
                    )}
                </div>
            </div>

            {/* Messages */}
            <div ref={messagesEndRef} className="h-96 overflow-y-auto p-4 space-y-3 bg-background">
                {isLoading ? (
                    <div className="text-center text-muted-foreground py-8">
                        <p className="text-sm">Loading messages...</p>
                    </div>
                ) : messages.length === 0 ? (
                    <div className="text-center text-muted-foreground py-8">
                        <p className="text-sm">{t.chat_no_messages}</p>
                    </div>
                ) : (
                    messages.map((message) => (
                        <div key={message.id} className={`flex flex-col ${message.username === username ? 'items-end' : 'items-start'}`}>
                            <div
                                className={`max-w-xs lg:max-w-md px-3 py-2 rounded-lg ${message.username === username
                                    ? 'bg-primary text-primary-foreground'
                                    : 'bg-muted text-muted-foreground'
                                    }`}
                            >
                                <div className="text-xs opacity-70 mb-1">
                                    {message.username === username ? 'You' : message.username}
                                </div>
                                <div className="text-sm">{message.content}</div>
                                <div className="text-xs opacity-50 mt-1 text-right">
                                    {formatTime(message.timestamp)}
                                </div>
                            </div>
                        </div>
                    ))
                )}
                {/* <div ref={messagesEndRef} /> */}
            </div>

            {/* Input */}
            <form onSubmit={handleSendMessage} className="p-4 border-t border-border bg-card">
                <div className="flex gap-2">
                    <input
                        type="text"
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        placeholder={t.chat_placeholder}
                        className="flex-1 px-3 py-2 border border-border rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        maxLength={500}
                    />
                    <button
                        type="submit"
                        disabled={!newMessage.trim()}
                        className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                        {t.chat_send}
                    </button>
                </div>
                <div className="text-xs text-muted-foreground mt-2 text-center">
                    Messages are stored in the cloud and sync in real-time across all browsers
                </div>
            </form>
        </div>
    );
}
