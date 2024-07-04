import { useState } from 'react';
import {
    Grid,
    Table,
    TableHeaderRow,
    PagingPanel,
    TableFilterRow,
    SearchPanel,
    Toolbar,
    TableEditRow,
    TableEditColumn,
    TableColumnReordering,
    DragDropProvider,
    TableColumnResizing,
    TableColumnVisibility,
    ColumnChooser,
} from '@devexpress/dx-react-grid-material-ui';
import {
    EditingState,
    Filter,
    FilteringState,
    IntegratedFiltering,
    IntegratedPaging,
    IntegratedSorting,
    PagingState,
    SearchState,
    Sorting,
    SortingState,
    TableColumnWidthInfo,
} from '@devexpress/dx-react-grid';
import { Paper } from '@mui/material';

import { StyledDiv } from '../styled/StyledProductsPage';

import { PRODUCTS } from '../testing-data/productsData';

const ReactGrid = () => {
    const COLUMNS = [
        { name: 'id', title: 'ID' },
        { name: 'title', title: 'Title' },
        { name: 'img', title: 'Image' },
        { name: 'desc', title: 'Desc' },
    ];
    const [rows, setRows] = useState(PRODUCTS);
    const getRowId = (row) => row.id;

    const [hiddenColumnNames, setHiddenColumnNames] = useState([]);

    const [sorting, setSorting] = useState<Sorting[]>([
        { columnName: 'id', direction: 'asc' },
    ]);

    const [filters, setFilters] = useState<Filter[]>([
        { columnName: 'title', value: '' },
    ]);
    const filteringStateColumnExtensions = [
        { columnName: 'id', filteringEnabled: false },
        { columnName: 'img', filteringEnabled: false },
    ];

    const [search, setSearch] = useState('');

    const [columnOrder, setColumnOrder] = useState([
        'id',
        'title',
        'img',
        'desc',
    ]);
    const [columnWidths, setColumnWidths] = useState<TableColumnWidthInfo[]>([
        { columnName: 'id', width: 80 },
        { columnName: 'title', width: 160 },
        { columnName: 'img', width: 380 },
        { columnName: 'desc', width: 240 },
    ]);

    const [currentPage, setCurrentPage] = useState(0);
    const [pageSize, setPageSize] = useState(5);
    const PAGE_SIZES: number[] = [5, 10, 15];

    const [editingRowIds, setEditingRowIds] = useState([]);
    const [addedRows, setAddedRows] = useState([]);
    const [rowChanges, setRowChanges] = useState({});

    const changeAddedRows = (value) => {
        setAddedRows(value);
    };

    const commitChanges = ({ added, changed, deleted }) => {
        let changedRows;
        if (added) {
            const startingAddedId =
                rows.length > 0 ? rows[rows.length - 1].id + 1 : 0;
            changedRows = [
                ...rows,
                ...added.map((row, index) => ({
                    id: startingAddedId + index,
                    ...row,
                })),
            ];
        }
        if (changed) {
            changedRows = rows.map((row) =>
                changed[row.id] ? { ...row, ...changed[row.id] } : row
            );
        }
        if (deleted) {
            const deletedSet = new Set(deleted);
            changedRows = rows.filter((row) => !deletedSet.has(row.id));
        }
        setRows(changedRows);
    };

    return (
        <StyledDiv>
            <Paper>
                <Grid rows={rows} columns={COLUMNS} getRowId={getRowId}>
                    <DragDropProvider />
                    <SearchState value={search} onValueChange={setSearch} />
                    <SortingState
                        sorting={sorting}
                        onSortingChange={setSorting}
                    />
                    <IntegratedSorting />
                    <FilteringState
                        filters={filters}
                        onFiltersChange={setFilters}
                        columnExtensions={filteringStateColumnExtensions}
                    />
                    <EditingState
                        editingRowIds={editingRowIds}
                        onEditingRowIdsChange={setEditingRowIds}
                        rowChanges={rowChanges}
                        onRowChangesChange={setRowChanges}
                        addedRows={addedRows}
                        onAddedRowsChange={changeAddedRows}
                        onCommitChanges={commitChanges}
                    />
                    <IntegratedFiltering />
                    <PagingState
                        currentPage={currentPage}
                        onCurrentPageChange={setCurrentPage}
                        pageSize={pageSize}
                        onPageSizeChange={setPageSize}
                    />
                    <IntegratedPaging />
                    <Table />
                    <TableColumnReordering
                        order={columnOrder}
                        onOrderChange={setColumnOrder}
                    />
                    <TableColumnResizing
                        columnWidths={columnWidths}
                        onColumnWidthsChange={setColumnWidths}
                    />
                    <TableHeaderRow showSortingControls />
                    <TableColumnVisibility
                        hiddenColumnNames={hiddenColumnNames}
                        onHiddenColumnNamesChange={setHiddenColumnNames}
                    />
                    <TableFilterRow />
                    <Toolbar />
                    <ColumnChooser />
                    <SearchPanel />
                    <TableEditRow />
                    <TableEditColumn
                        showAddCommand={!addedRows.length}
                        showEditCommand
                        showDeleteCommand
                    />
                    <PagingPanel pageSizes={PAGE_SIZES} />
                </Grid>
            </Paper>
        </StyledDiv>
    );
};

export default ReactGrid;
