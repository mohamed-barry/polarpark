
type ResponseData = {
    code: number;
    message?: string;
    data?: any;
}

export async function fanmakerGetRequest(uri: RequestInfo, token: string): Promise<ResponseData> {
    const header = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'X-Fanmaker-Token': token
    };

    // console.log(uri);
    // console.log(token);

    try {
        const resp = await fetch(uri, {
            headers: header
        })
        const text = await resp.text();
        // console.log(text);
        const data = JSON.parse(text);

        if (data.status >= 400) {
            return {code: data.status, message: data.message};
        } else {
            return {code: data.status, data: data.data};
        }
    } catch (e) {
        console.error(e);
        if (e instanceof Error) {
            console.log(e.stack);
            return {code: -1, message: e.message};
        }
        else return {code: -1};
    }
}

export async function fanmakerPostRequest(uri: RequestInfo, token: string, body: string): Promise<ResponseData> {
    const header = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'X-Fanmaker-Token': token
    };

    try {
        const resp = await fetch(uri, {
            headers: header,
            method: 'POST',
            body: body
        })

        const text = await resp.text();
        // console.log(text);
        const data = JSON.parse(text);

        if (data.status >= 400) {
            return {code: data.status, message: data.message};
        } else {
            return {code: data.status, data: data.data};
        }
    } catch (e) {
        console.error(e);
        if (e instanceof Error) {
            console.error(e.stack);
            return {code: -1, message: e.message};
        }
        else return {code: -1};
    }
}