import { db } from "@/db";
import { redirect } from "next/navigation";

export default function Page() {
  async function createSnippet(formData: FormData) {
    "use server";
    const title = formData.get("snippet") as string;
    const code = formData.get("code") as string;
    await db.snippet.create({
      data: {
        title,
        code,
      },
    });
    // 服务端组件的跳转
    redirect("/");
  }

  return (
    <form action={createSnippet}>
      <h3 className="font-bold m-3 text-center">create a snippet</h3>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <label className="w-12" htmlFor="snippet">
            Snippet
          </label>
          <input
            id="snippet"
            name="snippet"
            type="text"
            className="border border-teal-500 p-2 rounded w-full"
          />
        </div>
        <div className="flex gap-4">
          <label className="w-12" htmlFor="code">
            code
          </label>
          <input
            id="code"
            name="code"
            type="text"
            className="border border-teal-500 p-2 rounded w-full"
          />
        </div>

        <button className="rounded p-2 bg-blue-300" type="submit">
          Create
        </button>
      </div>
    </form>
  );
}
