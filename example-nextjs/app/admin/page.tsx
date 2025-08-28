export default function Page({ params }: { params: { id: string } }) {
  const { id } = params.id ? params : { id: "no-id" };

  return (
    <div>
        Admin Page for ID: {id}
    </div>
  );
}