interface Props {
    params: {
      id: string;
    };
  }
  
  export default function Blogs({ params }: Props) {
    return (
      <main>
        {params.id}
      </main>
    );
  }