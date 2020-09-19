import Nano from "@ghom/nano-bot"
import db from "../utils/db"

new Nano.Event({
  name: "guildMemberAdd",
  caller: "on",
  description: "Add role auto on member add",
  call: (member) => {
    if (!member.user) return
    const roleList: string[] = db.get(
      member.guild.id,
      member.user.bot ? "bot" : "user"
    ) as any
    if (roleList.length > 0) {
      member.roles.add(roleList).catch(console.error)
    }
  },
})
