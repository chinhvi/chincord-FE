export default function Button ({ text }: Readonly<{ text: string }>) {
    return (
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold p-1 rounded-full">{text}</button>
    );
}