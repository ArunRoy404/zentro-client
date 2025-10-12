import { ThemeProvider } from "next-themes";

const NextThemeProvider = ({ children }) => {
    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="light"
            disableTransitionOnChange
        >
            <>
                {children}
            </>
        </ThemeProvider>
    );
};

export default NextThemeProvider;