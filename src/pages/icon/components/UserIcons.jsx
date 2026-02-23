import CodeBox from "@/components/codebox/CodeBox";
import {
  CircleUser,
  Fingerprint,
  Lock,
  LogIn,
  LogOut,
  Shield,
  Unlock,
  User,
  Users,
} from "lucide-react";

export default function UserIcons() {
  return (
    <div>
      <div className="flex flex-col md:flex-row bg-white p-4 gap-8">
        {/* Preview 영역 */}
        <section className="md:w-1/2 w-full">
          <h2 className="text-lg font-semibold mb-4">User/Security Icon</h2>
          <div className="flex gap-4 flex-col flex-wrap">
            <div className="flex gap-4">
              <User />
              <CircleUser />
              <LogIn />
              <LogOut />
              <Lock />
            </div>
            <div className="flex gap-4">
              <Unlock />
              <Shield />
              <Fingerprint />
              <Users />
            </div>
          </div>
        </section>

        {/* CodeBlock 영역 */}
        <section className="md:w-1/2 w-full">
          <h2 className="text-lg font-semibold mb-4">Code</h2>
          <CodeBox
            code={[
              "<User />  <CircleUser />  <LogIn />  <LogOut />  <Lock />",
              "<Unlock />  <Shield />  <Fingerprint />  <Users />",
            ].join("\n")}
          />
        </section>
      </div>
    </div>
  );
}
