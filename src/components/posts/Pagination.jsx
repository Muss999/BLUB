import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../store/posts/postActions";
import { changePage } from "../../store/posts/postSlice";

export default function PaginationControlled() {
    const { currentPage, totalPages } = useSelector((state) => state.posts);
    const dispatch = useDispatch();

    const handleChange = (event, value) => {
        dispatch(changePage({ page: value }));
        console.log("sdfMUSI");
        dispatch(getPosts());
    };

    return (
        <Stack spacing={2}>
            <Pagination
                count={totalPages}
                page={currentPage}
                onChange={handleChange}
            />
        </Stack>
    );
}
