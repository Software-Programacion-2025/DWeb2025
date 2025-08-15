interface ButtonProps {
    label: string;
    url: string;
    variant: "primary" | "secondary";
}


export default function Button({ label, url, variant }: ButtonProps) {

    let classColor = ''

    switch (variant) {
        case "primary":
            classColor = "bg-blue-700 text-white";
            // Primary button styles
            break;
        case "secondary":
            classColor = "bg-gray-200 text-gray-800";
            // Secondary button styles
            break;
        default:
            classColor = "bg-gray-300 text-gray-600";
    }

    return (
        <>
            <a href={url} className={`font-bold w-auto py-2 px-4 rounded-2xl ${classColor}`}>
                {label}
            </a>
        </>
    )
}