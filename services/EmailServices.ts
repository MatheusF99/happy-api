
interface emailTo{
    name: string,
    email: string,
}
interface emailMessage{
    subject: string,
    body: string,
    attachment?: string[],
}

interface messageDTO{
    to: emailTo;
    message: emailMessage;
}

class EmailServices{
    sendEmail({to, message}: messageDTO){
        console.log(`email enviado para: ${to.name}: ${message.subject}`);
    }
}


export default EmailServices