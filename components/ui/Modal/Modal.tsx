"use client"

import { X } from "lucide-react";
import { ModalProps } from "./modal.types";

export default function Modal ({
    open,
    onClose,
    children,
    className
}: ModalProps) {

    if (!open) return null;

    
    
    return (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm">
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                <div
                className={`bg-white p-6 rounded-2xl w-full shadow-2xl ${className ?? ""}`}>
                    <div className="...">
                        <div className="flex justify-end">
                           <button
                                onClick={onClose}
                                aria-label="Close modal"
                                className="rounded-full p-2 hover:bg-gray-100 transition"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        <div className="mt-4">
                            {children}
                        </div>
                </div>
                </div>
            </div>
        </div>
    )
} 