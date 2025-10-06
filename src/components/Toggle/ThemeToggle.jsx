import React from 'react';
import { Button } from '../ui/button';
import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';

const ThemeToggle = () => {
    const { theme, setTheme } = useTheme()
    console.log(theme);

    return (
        <div>
            <Button
                variant="ghost"
                size="icon"
                className={'rounded-full mb-1'}
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
                {theme === "dark" ? (
                    <Sun className="h-[1.2rem] w-[1.2rem]" />
                ) : (
                    <Moon className="h-[1.2rem] w-[1.2rem]" />
                )}
            </Button>
        </div>
    );
};

export default ThemeToggle;