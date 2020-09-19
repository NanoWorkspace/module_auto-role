import ReactionRoleMessage from "./app/ReactionRoleMessage"
import ReactionRole from "./app/ReactionRole"

require("./parts/commands")
require("./parts/events")

const NanoAutoRole: {
  ReactionRoleMessage: typeof ReactionRoleMessage
  ReactionRole: typeof ReactionRole
} = {
  ReactionRoleMessage,
  ReactionRole,
}

export default NanoReactionRole
