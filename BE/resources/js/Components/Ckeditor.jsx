import React from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import {
    ClassicEditor,
    Autosave,
    Bold,
    Essentials,
    GeneralHtmlSupport,
    Indent,
    IndentBlock,
    Italic,
    Paragraph,
} from "ckeditor5";

import "ckeditor5/ckeditor5.css";

export default function Ckeditor({ value, onChange }) {
    return (
        <CKEditor
            editor={ClassicEditor}
            config={{
                toolbar: {
                    items: ["bold", "italic", "|", "outdent", "indent"],
                    shouldNotGroupWhenFull: false,
                },
                plugins: [
                    Autosave,
                    Bold,
                    Essentials,
                    GeneralHtmlSupport,
                    Indent,
                    IndentBlock,
                    Italic,
                    Paragraph,
                ],
                licenseKey: "GPL",
            }}
            data={value}
            onChange={(event, editor) => {
                const data = editor.getData();
                onChange(data);
            }}
        />
    );
}
