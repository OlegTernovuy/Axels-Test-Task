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

import { StyledWrapperDiv } from '../styled/StyledReactGrid';

import { generateRows, globalSalesValues } from '../testing-data/generator';

const LearnReactGrid = () => {
    const columns = [
        { name: 'region', title: 'Region' },
        { name: 'sector', title: 'Sector' },
        { name: 'customer', title: 'Customer' },
        { name: 'product', title: 'Product' },
        { name: 'amount', title: 'Sale Amount' },
    ];
    const rows = generateRows({ columnValues: globalSalesValues, length: 8 });

    const [hiddenColumnNames, setHiddenColumnNames] = useState([]);

    const [sorting, setSorting] = useState<Sorting[]>([
        { columnName: 'region', direction: 'asc' },
    ]);

    const [filters, setFilters] = useState<Filter[]>([
        { columnName: 'region', value: '' },
    ]);
    const filteringStateColumnExtensions = [
        { columnName: 'region', filteringEnabled: false },
        { columnName: 'sector', filteringEnabled: false },
    ];

    const [search, setSearch] = useState('');

    const [columnOrder, setColumnOrder] = useState([
        'region',
        'sector',
        'customer',
        'product',
        'amount',
    ]);
    const [columnWidths, setColumnWidths] = useState<TableColumnWidthInfo[]>([
        { columnName: 'region', width: 180 },
        { columnName: 'sector', width: 180 },
        { columnName: 'customer', width: 180 },
        { columnName: 'product', width: 240 },
        { columnName: 'amount', width: 240 },
    ]);

    const [currentPage, setCurrentPage] = useState(0);
    const [pageSize, setPageSize] = useState(5);
    const pageSizes: number[] = [5, 10, 15];

    const [editingRowIds, setEditingRowIds] = useState([]);
    const [addedRows, setAddedRows] = useState([]);
    const [rowChanges, setRowChanges] = useState({});

    const changeAddedRows = (value) => {
        const initialized = value.map((row) =>
            Object.keys(row).length ? row : { city: 'Tokio' }
        );
        setAddedRows(initialized);
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
        //     setRows(changedRows);
    };

    return (
        <StyledWrapperDiv>
            <Paper>
                <Grid rows={rows} columns={columns}>
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
                    <PagingPanel pageSizes={pageSizes} />
                </Grid>
            </Paper>
        </StyledWrapperDiv>
    );
};

export default LearnReactGrid;
