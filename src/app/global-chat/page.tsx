"use client";
import Button from "@/app/component/form-btn/Button";
import {webUrl} from "@/app/utils/web-url";

export default function GlobalChat() {

    //sample
    const messages = [
        {
            id: 1,
            sender: "Chinh Vi",
            text: "Hello world",
            time: "2022-12-07 12:00 PM",
        },
        {
            id: 2,
            sender: "Hieu Le",
            text: "Hello world",
            time: "2022-12-07 12:01 PM",
        },
        {
            id: 3,
            sender: "Hieu Le",
            text: "alo alo",
            time: "2022-12-07 12:02 PM",
        },
        {
            id: 4,
            sender: "Chinh Vi",
            text: "alo alo",
            time: "2022-12-07 12:03 PM",
        },
        {
            id: 5,
            sender: "Chinh Vi",
            text: "alo alo",
            time: "2022-12-07 12:04 PM",
        },
        {
            id: 6,
            sender: "Chinh Vi",
            text: "alo alo",
            time: "2022-12-07 12:05 PM",
        },
        {
            id: 7,
            sender: "Chinh Vi",
            text: "alo alo",
            time: "2022-12-07 12:06 PM",
        },
        {
            id: 8,
            sender: "Chinh Vi",
            text: "alo alo",
            time: "2022-12-07 12:07 PM",
        },
        {
            id: 9,
            sender: "Chinh Vi",
            text: "alo alo",
            time: "2022-12-07 12:08 PM",
        },
        {
            id: 10,
            sender: "Chinh Vi",
            text: "alo alo",
            time: "2022-12-07 12:09 PM",
        }
    ];

    // const isMyMessage = (message: any) => {
    //     // replace with logic later
    //     return message.sender === "Chinh Vi";
    // };

    return (
        <div className="flex flex-row justify-center min-h-screen bg-gray-300 p-3 gap-3">
            <ul id="nav-bar" className={"w-[5%] h-screen border rounded-xl max-md:hidden p-2"}>
                <li>
                    <button
                        onClick={() => {
                            window.location.href = webUrl.global;
                        }}
                        className={"border rounded-full h-10 w-10 flex justify-center items-center hover:bg-gray-400"}>G</button>
                </li>
            </ul>
            <div
                className="p-8 rounded-xl shadow-md w-[94%] h-screen flex flex-col justify-center border gap-2"
            >
                <div id="chatbox-header" className={"w-full border-b h-1/10 flex justify-center items-center"}>
                    {/*<button className="w-1/5">left</button>*/}
                    <h1 className="text-2xl w-3/5 text-center">Global chat</h1>
                </div>

                <div id="chatbox-body" className={"w-full h-8/10 text-center overflow-y-scroll no-scrollbar flex flex-col gap-2"}>
                    {
                        messages.map((message) => (
                            <div key={message.id} className={`flex flex-col justify-between items-start`}>
                                <div className={"flex flex-row gap-1 items-center"}>
                                    <p className={"text-lg font-bold"}>{message.sender}</p>
                                    <small className={"text-[0.7rem]"}>{message.time}</small>
                                </div>
                                <p className="px-2">{message.text}</p>
                            </div>
                        ))
                    }
                </div>

                <div id="chatbox-footer" className={"w-full h-1/10 flex justify-center"}>
                    <form action="#" className="w-full flex flex-row items-center justify-between">
                        <input type="text" placeholder="Enter your message" className="border w-4/5 h-1/2 rounded-full p-1 lg:w-[95%]"/>
                        <Button text={"Send"}></Button>
                    </form>
                </div>
            </div>
        </div>
    );
}