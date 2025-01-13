let colorbit_51bit = colorbit.initColorBit(DigitalPin.P0, BitColorMode.RGB)
colorbit_51bit.setMatrixWidth(0)
basic.forever(function () {
    colorbit_51bit.showStringColor("", colorbit.colors(BitColors.Red))
})
