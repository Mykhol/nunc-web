import Link from "next/link";

/**
 * Displays a menu item for the navigation bar that is displayed differently is a specific page is currently displayed.
 */
const NavigationItem = (currentPath: string, url: string, linkText: string) => {

    return (
        <li key={linkText}><Link passHref={true} href={url}><a id={currentPath.includes(url) ? "active-page" : undefined}>{linkText}</a></Link></li>
    )

}

export default NavigationItem