import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const sizeGuideData = [
  {
    size: "36",
    waist: "66-68",
    hip: "90-92",
    thigh: "52-54",
  },
  {
    size: "38",
    waist: "70-72",
    hip: "94-96",
    thigh: "54-56",
  },
  {
    size: "40",
    waist: "74-76",
    hip: "98-100",
    thigh: "56-58",
  },
  {
    size: "42",
    waist: "78-80",
    hip: "102-104",
    thigh: "58-60",
  },
  {
    size: "44",
    waist: "82-84",
    hip: "106-108",
    thigh: "60-62",
  },
]

export function SizeGuide() {
  return (
    <div className="rounded-lg border bg-card overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[80px] md:w-[100px] text-xs md:text-sm whitespace-nowrap">Tamanho</TableHead>
            <TableHead className="text-xs md:text-sm whitespace-nowrap">Cintura (cm)</TableHead>
            <TableHead className="text-xs md:text-sm whitespace-nowrap">Quadril (cm)</TableHead>
            <TableHead className="text-xs md:text-sm whitespace-nowrap">Coxa (cm)</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sizeGuideData.map((row) => (
            <TableRow key={row.size}>
              <TableCell className="font-medium text-xs md:text-sm">{row.size}</TableCell>
              <TableCell className="text-xs md:text-sm">{row.waist}</TableCell>
              <TableCell className="text-xs md:text-sm">{row.hip}</TableCell>
              <TableCell className="text-xs md:text-sm">{row.thigh}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

