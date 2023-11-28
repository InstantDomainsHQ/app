import {User} from "firebase/auth";
import {Configuration} from "@/src/codegen";

export const offlineMode = false

// export const ANONYMOUS_USER_API_KEY = "aef-anon-YmaGJfzBpgjWbgWiphfF7RfGNirNtQT7UJ2Ig5jB2SffW7"

export const getAuthToken = async (user?: User): Promise<string> => {
    if (!!user) {
        const tokenResult = await user?.getIdTokenResult(false)
        if (tokenResult?.token) {
            return tokenResult?.token as string
        }
    }
    return ''
}

export const headerConfig = (token: string) => {
    const config = new Configuration();
    config.baseOptions = {
        headers: { Authorization: 'Bearer ' + token },
    };
    return config
}