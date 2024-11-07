import {
  businessProcess,
  customerSatisfaction,
  efficensy,
  finanseHealthOfTheCompany,
} from "../constants/questions";
import { Grade } from "../models/questions";

export class ResultDataService {
  private companyConstantData: { data: number[] }[] = [
    {
      data: finanseHealthOfTheCompany,
    },
    {
      data: businessProcess,
    },
    {
      data: efficensy,
    },
    {
      data: customerSatisfaction,
    },
  ];

  private graphPerents: number[] = [];

  constructor(private dataArr: Grade[]) {}

  public get companyGraphPerecnts() {
    return this.graphPerents;
  }

  public filterAll() {
    this.graphPerents = this.companyConstantData
      .map((t) => {
        return this.filterData(this.dataArr, t.data);
      })
      .map((d) => this.generatePercents(d));

    return this;
  }

  private filterData(resultsArr: Grade[], partDataArr: number[]) {
    const newArr: Grade[] = [];

    resultsArr.forEach((_, index) => {
      let findData = resultsArr.find(
        (rsulatsData) => rsulatsData.quetionId === partDataArr[index]
      );
      if (!findData) return;
      newArr.push(findData);
    });

    return newArr;
  }

  private generatePercents(arr: Grade[]) {
    const questionLength = arr.length;
    const percentPoint = arr.reduce((acc, el) => {
      if (el.grade === 5) {
        acc++;
      }
      return acc;
    }, 0);

    const percent = (percentPoint / questionLength) * 100;
    return percent;
  }
}
