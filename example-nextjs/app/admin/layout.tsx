export default function AdminLayout({ children }: { children: React.ReactNode }) {
    console.log("Loading admin layout...");
    return (
        <div>
            <h1>Admin Layout</h1>
            {children}
        </div>
    );
}
