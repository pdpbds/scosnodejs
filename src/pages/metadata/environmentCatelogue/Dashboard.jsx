import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getTableData } from "../../../shared/apis/table/table";
import { encsDrawer } from "../../../shared/utils/drawer";
import { ENCSRoutes } from "../../../routes/metadataRoutes";
import {
  getApiEndpointNameFromRoutes,
  getTableDetailFromRoutes,
  getTableKeyNameFromRoutes,
  getTableTitleNameFromRoutes,
} from "../../../shared/utils/getApiEndpointFromRoutes";
import { useSelector } from "react-redux";
import { getSpacedDisplayName } from "../../../shared/utils/table";
import { MetadataLayout } from "../../../shared/layout";
import "./style.scss";
import { Table, Pagination } from "../../../shared/components/common";

const Dashboard = () => {
  // loggin user details from store
  const { user } = useSelector((state) => state.userReducer);
  //table data fetched from api
  const [tableContents, setTableContents] = useState([]);
  // table title returned from the routes with respect to the url path
  const [tableTitle, setTableTitle] = useState("");
  // table details
  const [tableDetails, setTableDetails] = useState({});
  // key for the table row
  const [tableRowkey, setTableRowKey] = useState("");
  // checked table row
  const [selectedRow, setSelectedRow] = useState([]);
  // active api endpoint to fetch table data with respect to the url path
  const [activeEndPoint, setActiveEndPoint] = useState("");
  // refresh the table
  const [refresh, setRefresh] = useState(false);
  // location hook to get the location variables
  const location = useLocation();
  // Base Url of the API
  const baseUrl = process.env.REACT_APP_ENCS_BASE_URL;

  useEffect(() => {
    /**
     * getting the correct endpoint from routes to fetch table data
     * we are passing drawer | location | path
     */

    let endpointFromPath = getApiEndpointNameFromRoutes(
      encsDrawer,
      location,
      "environmentcatelogue/"
    );
    /**
     * in the same way, getting the correct title of the table from routes
     * we are passing drawer | location | path
     */

    let tableTitle = getTableTitleNameFromRoutes(
      encsDrawer,
      location,
      "environmentcatelogue/"
    );

    // get table detail from routes

    let tableDetail = getTableDetailFromRoutes(
      ENCSRoutes,
      location,
      "environmentcatelogue/"
    );
    setTableDetails(tableDetail);

    // get the key for the table for crud or any other row level operation
    let tableKey = getTableKeyNameFromRoutes(
      encsDrawer,
      location,
      "environmentcatelogue/"
    );

    setTableRowKey(tableKey);

    /**
     * getting the actual endpoint if defined else try get from the state
     * check for undefined - chances for undefined endpoint with wrong sub path
     */

    if (endpointFromPath) {
      getTable(endpointFromPath);
    } else {
      activeEndPoint.length > 0 && getTable(activeEndPoint);
    }
    // set the table title
    setTableTitle(tableTitle);

    // dependency array
  }, [refresh, location.pathname]);

  const getTable = async (activeEndPoint) => {
    const path = `${baseUrl}${activeEndPoint}`;
    // get the table data by passsing endpoint and user data
    const data = await getTableData(path, user);
    if (data) {
      // map the keys of the response we got from the api into an array
      const objectKeys = data.map((datum) => Object.keys(datum));
      // map the above key array in to an array of objects
      // each object will have title and and the actual key as an id
      const header = objectKeys?.[0]?.map((item) => ({
        title: getSpacedDisplayName(item),
        id: item,
      }));
      // set the above mapped array as header details and the actual response as the data
      setTableContents({ header, data });
    }
  };

  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [pageCount, setPageCount] = useState(
    Math.ceil(tableContents.data?.length / rowsPerPage)
  );

  useEffect(() => {
    setPage(1)
  }, [tableContents])
  
  // state for the visibility of crud modal
  const [openCRUDModal, setOpenCRUDModal] = useState(false);
  const [CRUDModalType, setCRUDModalType] = useState("add");

  const onRowClick = (rowData) => {
    if (selectedRow.find((e) => e[tableRowkey] === rowData[tableRowkey])) {
      const selectedItems = selectedRow.filter(
        (e) => e[tableRowkey] !== rowData[tableRowkey]
      );
      setSelectedRow(selectedItems);
    } else {
      setSelectedRow([rowData]);
    }
  };

  const layoutProps = {
    setActiveEndPoint: setActiveEndPoint,
    setRefresh: setRefresh,
    getTable: getTable,
    tableData: tableContents,
    tableTitle,
    refresh,
    drawer: encsDrawer,
    openCRUDModal,
    setOpenCRUDModal,
    pageTitle: "Environment Catelogue",
    CRUDModalType,
    setCRUDModalType,
    baseUrl,
  };

  const tableProps = {
    selectedRow: selectedRow,
    onRowClick: onRowClick,
    tableData: tableContents,
    tableRowkey,
    setTableContents: setTableContents,
    showCheckBox: true,
    showAction: true,
    page,
    tableTitle,
    tableDetails,
    rowsPerPage,
    openCRUDModal,
    setOpenCRUDModal,
    activeEndPoint,
    getTable,
    CRUDModalType,
    setCRUDModalType,
    baseUrl,
  };

  const paginationProps = {
    dataCount: tableContents.data?.length, // total data count
    page, // current page
    setPage, //state for the page number to be set
    rowsPerPage, // rows per page count
    setRowsPerPage, //state for the rows per page event
    pageCount, // total number of pages as per the data
    rowsPerPageData: [10, 25, 50, 100], // data for the row per page dropdown
    jumpPageVisibility: true, // show the jump to page option
  };

  return (
    <MetadataLayout {...layoutProps}>
      {tableContents.data?.length > 0 && <Table {...tableProps} />}
      <Pagination {...paginationProps} />
    </MetadataLayout>
  );
};
export default Dashboard;
