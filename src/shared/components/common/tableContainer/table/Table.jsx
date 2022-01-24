import "./table.scss"
import TableBody from "./TableBody"
import TableHeader from "./TableHeader"

const Table = props => {
  const {
    tableData,
    setTableContents,
    onRowClick = () => {},
    report,
    selectedRow,
    showCheckBox,
    showAction,
    setModalMode,
    setModalOpen,
    setModalForm,
    modalForm,
    tableDetails,
    deleteDataToTable,
    page,
    rowsPerPage
  } = props
  const { header, data: rowData } = tableData

  const checkBoxObj = {
    title: "",
    id: "cb"
  }

  const actionObj = {
    title: "Action",
    id: "action"
  }

  const finalHeader = [showCheckBox && checkBoxObj, ...header, showAction && actionObj]

  const headerProps = {
    setTableContents: setTableContents,
    tableData: tableData,
    header: finalHeader
  }

  const bodyProps = {
    report: report,
    onRowClick: onRowClick,
    rowData: rowData,
    selectedRow: selectedRow,
    header: finalHeader,
    setModalMode: setModalMode,
    setModalOpen: setModalOpen,
    setModalForm: setModalForm,
    modalForm: modalForm,
    tableDetails: tableDetails,
    deleteDataToTable: deleteDataToTable,
    page: page,
    rowsPerPage: rowsPerPage
  }

  return (
    <>
      {/* start of the table */}
      <table className={`flex-c ${header?.length < 10 ? "titan-table-fill" : "titan-table"}`}>
        <TableHeader {...headerProps} />
        <TableBody {...bodyProps} />
      </table>
      {/* end of the table */}
    </>
  )
}

export default Table
