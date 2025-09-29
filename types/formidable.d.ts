declare module "formidable" {
  import type { IncomingMessage } from "http";

  interface File {
    filepath: string;
    originalFilename?: string | null;
    mimetype?: string | null;
    size: number;
  }

  interface Files {
    [key: string]: File | File[];
  }

  interface Fields {
    [key: string]: undefined | string | string[];
  }

  interface Options {
    multiples?: boolean;
  }

  class IncomingForm {
    constructor(options?: Options);
    parse(
      req: IncomingMessage,
      callback: (err: any, fields: Fields, files: Files) => void
    ): void;
  }

  function formidable(options?: Options): IncomingForm;

  export { File, Files, Fields, Options, IncomingForm };
  export default formidable;
}
