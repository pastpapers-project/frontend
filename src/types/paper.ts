// src/types/paper.ts
export interface PastPaper {
  id: string;
  course_name: string;
  course_code: string;
  pastpaper_type: string;
  pastpaper_number: number | null;
  year: number;
  tenure: string;
  variant: string;
  pdf_url: string;
  _rid: string;
  _self: string;
  _etag: string;
  _attachments: string;
  _ts: number;
}


export interface SavePaper {
  id: string;
  course_name: string;
  course_code: string;
  pastpaper_type: string;
  year: number;
  tenure: string;
  variant: string;
  pdf_url: string;
}