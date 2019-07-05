import React, { useState, useContext, useEffect } from 'react'
import { BookmarkConsumer, BookmarkContext } from '../providers/BookmarkProvider'

export default function BookmarkList() {
    const { fetchBookmarks } = useContext(BookmarkContext)

    useEffect(() => {
        fetchBookmarks()
    }, [])

    return (
        <BookmarkConsumer>
            {({ bookmarks }) => (
                <ul>
                    <h1>Bookmarks</h1>
                    {bookmarks.map(bookmark => (
                        <li><a href={bookmark.url}>{bookmark.title}</a></li>
                    ))}
                </ul>
            )}
        </BookmarkConsumer>
    )
}
