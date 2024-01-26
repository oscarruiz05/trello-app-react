import Card from "./Card"

function Column({title}) {
  const cards = [1,2,3];

  return (
    <div
      className="
      border border-solid border-slate-700 rounded-lg
      "
    >
      <h1 className="py-2 px-4 bg-sky-400 rounded-t-lg text-center">{title}</h1>
      <div
        className="
        flex flex-col gap-2
        mt-4 p-11
        "
      >
        {
          cards.map((card, index) => {
            return (
              <Card key={index} />
            )
          })
        }
      </div>
    </div>
  )
}

export default Column
