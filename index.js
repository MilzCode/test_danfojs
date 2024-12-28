import * as dfd from "danfojs";

// Datos de entrada
const data_test = {
    A: [1, 2, 3, 4,1],
    B: [5, 6, 7, 8,1],
    C: [9, 10, 11, 12,1],
    idx: ["a", "b", "c", "d","d"]
};

// Crear el DataFrame
const df = new dfd.DataFrame(data_test);

//agregar una columna al DataFrame por medio de una operación con otras columnas
// df.addColumn("B+idx+A", df["B"].values.map((x, i) => {
//   return x + df["idx"].values[i] + df["A"].values[i];
// }), { inplace: true });

//buscar fila dado el valor de una columna
// const rowIdx = df["idx"].values.indexOf("d");
// const row = df.iloc({ rows: [rowIdx] });



dfd.toExcel(df, { fileName: "testOut.xlsx"});