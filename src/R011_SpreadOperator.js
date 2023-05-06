import React, { Component } from "react";

class R011_SpreadOperator extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        var varArray1 = ['num1', 'num2'];
        var varArray2 = ['num3', 'num4'];
        var sumVarArr = [varArray1[0],varArray1[1],varArray2[0],varArray2[1]];

        console.log('1. sumVarArr : '+sumVarArr);

        let sumLetArr = [...varArray1,...varArray2];
        console.log('2. sumLetArr : '+sumLetArr);
        const [sum1, sum2, ...remain] = sumLetArr;
        console.log('3. sum1 : '+sum1+', sum2 : '+sum2+ ', remain : '+remain);
    }
}