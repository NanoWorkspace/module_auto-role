import Discord from "discord.js"
import Enmap from "enmap"

export type AutoRoleData = Enmap<
  Discord.Snowflake,
  {
    user: Discord.Snowflake[]
    bot: Discord.Snowflake[]
  }
>
