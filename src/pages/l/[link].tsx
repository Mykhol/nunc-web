import {FC} from "react";
import {useRouter} from "next/router";

/**
 * Routes the user to another URL given the path of the url they have given and what it matches in a databse.
 */
const LinkShortener: FC = () => {
    const router = useRouter()
    const { link } = router.query

    return (
        <>
            <p>{link}</p>
        </>
    )
}

export default LinkShortener