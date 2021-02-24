import Image from "next/image";
import Layout from "../components/Layout";

type Member = {
  name: string;
  iconUrl: string;
  twitterId?: string;
  githubUsername?: string;
};

const members: Member[] = [
  {
    name: "sakito",
    iconUrl: "/member-icons/sakito.jpg",
    twitterId: "__sakito__",
    githubUsername: "sakito21",
  },
  {
    name: "BaHo",
    iconUrl: "/member-icons/baho.jpg",
    twitterId: "b4h0_c4t",
    githubUsername: "b4h0-c4t",
  },
  {
    name: "sosukesuzuki",
    iconUrl: "/member-icons/sosukesuzuki.jpg",
    twitterId: "__sosukesuzuki",
    githubUsername: "sosukesuzuki",
  },
];

const Member = ({ member }: { member: Member }) => {
  return (
    <section>
      <p>{member.name}</p>
      <Image src={member.iconUrl} width="100" height="100" />
      <a
        href={`https://twitter.com/${member.twitterId}`}
      >{`@${member.twitterId}`}</a>
      <a
        href={`https://github.com/${member.githubUsername}`}
      >{`@${member.githubUsername}`}</a>
    </section>
  );
};

const Members = () => (
  <Layout title="メンバー一覧">
    {members.map((member) => {
      return <Member key={member.name} member={member} />;
    })}
  </Layout>
);

export default Members;
