import { useEffect } from 'react';

const LiveChat = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.async = true;
        script.src = 'https://embed.tawk.to/66563cf69a809f19fb36698e/1hv0ds99u';
        script.charset = 'UTF-8';
        script.setAttribute('crossorigin', '*');
        document.getElementsByTagName('head')[0].appendChild(script);
       

        return () => {
            // Cleanup script if needed
            document.getElementsByTagName('head')[0].removeChild(script);
        };
    }, []);

    return null;
}

export default LiveChat;
