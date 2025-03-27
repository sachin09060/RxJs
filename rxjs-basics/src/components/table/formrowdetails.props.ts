export interface FormRowDetailsProps {
    formRowDetails: Array<FormRowProps>;
    formColumnDetails: Array<FormColumnsProps>;
  }
  
  export interface FormRowProps {
    assessmentguid: string;
    serialno: number;
    formname: string;
    formGuid: string;
    sections: number;
    sectionitems: number;
    sectiontotalmarks: number;
  }
  
  export interface FormColumnsProps {
    id: string;
    label: string;
    width: number;
  }
  