interface ButtonProps {
    label: string;
    url: string;
    variant: "primary" | "secondary" | "access" | "print" | "amber" | "destructive" | "noselect";
}

export default function Button({ label, url, variant }: ButtonProps) {

    let buttonClasses = 'inline-block w-full text-center px-6 py-3 rounded-lg font-semibold transition-all duration-200 hover:-translate-y-0.5 border shadow-md'

    switch (variant) {
        case "primary":
            buttonClasses += " bg-primary text-primary-foreground border-primary hover:bg-primary/90";
            break;
        case "secondary":
            buttonClasses += " bg-secondary text-secondary-foreground border-border hover:bg-secondary/90";
            break;
        case "access":
            buttonClasses += " bg-access text-access-foreground border-border hover:bg-access/90";
            break;
        case "print":
            buttonClasses += " bg-print text-print-foreground border-border hover:bg-print/90";
            break;
        case "amber":
            buttonClasses += " bg-amber text-amber-foreground border-border hover:bg-amber/90";
            break;
        case "destructive":
            buttonClasses += " bg-destructive text-destructive-foreground border-border hover:bg-destructive/90";
            break;
        case "noselect":
            buttonClasses += " bg-noselect text-noselect-foreground border-border hover:bg-noselect/90";
            break;
        default:
            buttonClasses += " bg-primary text-primary-foreground border-primary hover:bg-primary/90";
    }

    return (
        <a href={url} className={buttonClasses}>
            {label}
        </a>
    )
}