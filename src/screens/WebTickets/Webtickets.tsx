import { WebView } from 'react-native-webview';

export default function WebTicket(): JSX.Element {
    return (<WebView source={{uri: "https://mlb.tickets.com/ticketmanagement/?agency=WRSM_MYTIXX&orgid=54715#/"}} style={{flex: 1}}>
    </WebView>)
}