// https://dev.to/franciscomendes10866/how-to-implement-drag-and-drop-in-react-3j8j

import "@fontsource/anek-telugu";
import { useCallback, useState } from "react";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import { styled } from "@stitches/react";
import * as _ from "radash";

import { Column } from "../components/Column";
import { IElement } from "../components/Column";

const COLUMNS = ['Backlog', 'In Progress', 'In Review', 'Done']
export const DEFAULT_COLUMN = 'backlog'

const DEFAULT_DATA_STATE: IElement[] = [
  {
    id: _.uid(6),
    content: 'Hello World',
    column: DEFAULT_COLUMN
  },
  {
    id: _.uid(6),
    content: 'Hello World 2',
    column: DEFAULT_COLUMN
  }
]

const App = () => {
  const [data, setData] = useState<IElement[]>(DEFAULT_DATA_STATE)

  const handleOnDragEnd = useCallback(
    ({ active, over }: DragEndEvent) => {
      const elementId = active.id;
      const deepCopy = [...data]

      const updatedState = deepCopy.map((elm: IElement) => {
        if(elm.id === elementId) {
          const column = over?.id ? String(over.id) : elm.column
          return { ...elm, column }
        }
        return elm
      })

      setData(updatedState)
    },
    [data, setData]
  )

  return (
    <DndContext onDragEnd={handleOnDragEnd}>
      <MainWrapper>
        {COLUMNS.map((column, columnIndex) => (
          <Column
            key={`column-${columnIndex}`}
            heading={column}
            elements={_.select(
              data,
              (elm) => elm,
              (f) => f.column === _.camal(column)
            )}
          />
        ))}
      </MainWrapper>
    </DndContext>
  )
}

const MainWrapper = styled("div", {
  display: "flex",
  justifyContent: "space-evenly",
  backgroundColor: "#fff",
  paddingTop: 40,
  paddingBottom: 40,
  fontFamily: "Anek Telugu",
  height: "90vh",
});

export default App
