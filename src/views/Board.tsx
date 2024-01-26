import Column from "@/components/Column"

function Board() {
  const columns = [1,2,3,4];
  return (
    <>
      <div
        className="
        flex flex-row gap-6
        w-full px-20 pt-10 pb-20
        overflow-x-auto
        "
      >
        {
          columns.map((column, index) => {
            return (
              <Column title={'Columna '+column} key={index} />
            )
          })
        }
      </div>
    </>
  )
}

export default Board
