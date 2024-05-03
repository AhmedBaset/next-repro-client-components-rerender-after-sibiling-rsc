export default async function TestServerComponent({text}: TestServerComponentProps){
    console.log("Render TestServerComponent");
     
    await new Promise(resolve => {
        setTimeout(() => resolve(true), 3000);
    });

    return (
        <div>
            I am a <strong>server</strong> component<br />
            Text: {text}
        </div>
    );
}