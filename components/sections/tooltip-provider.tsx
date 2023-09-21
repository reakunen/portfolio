"use client" 
import React from 'react';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import { useTheme } from 'next-themes';


const Tooltip = ({ children, title }) => {
    const { theme } = useTheme();

    return (
        <TooltipPrimitive.TooltipProvider delayDuration='50'>
            <TooltipPrimitive.Root>
                <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
                <TooltipPrimitive.Content
                    side="top"
                    sideOffset={5}
                    className="rounded-md bg-black px-3 py-2 text-sm text-gray-50 shadow-lg dark:bg-white dark:text-gray-900"
                >
                    <TooltipPrimitive.TooltipArrow
                        className='-mt-[0.5px] w-[.75rem]'
                        fill={theme === 'light' ? '#000' : '#fff'}
                    />
                    {title}
                </TooltipPrimitive.Content>
            </TooltipPrimitive.Root>
        </TooltipPrimitive.TooltipProvider>
    );
};

export default Tooltip;