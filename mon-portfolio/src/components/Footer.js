export default function Footer(){
    return (
        <footer className="footer sm:footer-horizontal footer-center bg-base-200 text-base-content p-1">
            <aside>
                <p>© {new Date().getFullYear()} Mengqi Chen</p>
            </aside>
        </footer>
    );
}