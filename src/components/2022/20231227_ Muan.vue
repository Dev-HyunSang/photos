
<template>
    <div class="photo-area">
        <div class="statement">
            <img class="top-image" src="@/assets/2022/2022-12-27/2H6A3306.jpg" />
            <p style="padding-bottom: 1rem; font-weight: bold;">연말의 다양한 모습들. · various aspects of the end of the year-end</p>
            <p>제가 살고 있는 조금만한 동네에는 사람들이 많이 돌아다니지 않습니다.<br/>
                그러한 동네에서 연말에서 볼 수 있는 연말 분위기의 다양한 모습들을 보고 담아보았습니다.
            </p>
            <p style="padding-top: 1rem;">There aren't many people walking around in the small neighborhood where I live.<br/>
                I saw and captured various aspects of the year-end atmosphere that can be seen at the end of the year in such a neighborhood.
            </p>
        </div>
        <table>
            <tr>
                <td>
                    <img class="image" src="@/assets/2022/2022-12-27/2H6A3306.jpg">
                </td>
                <td>
                    <img class="image" src="@/assets/2022/2022-12-27/2H6A3351.jpg" />
                </td>
            </tr>
            <tr>
                <td>
                    <img class="image" src="@/assets/2022/2022-12-27/2H6A3329.jpg" />                
                </td>
            </tr>
        </table>
        <hr />
        <div class="info-area">
            <p class="info">Canon EOS R6 + RF 24-105 F4 IS USM(Kenko Black Mist No.05)<br/>
           <b>Copyright ⓒ 2023 by HyunSang Park. All pictures cannot be copied without permission.</b></p>
        </div>
    </div>
</template>
<script>
export default{
    name: "20230103_Busan"
}
</script>
<style scoped>
hr {
    background-color: grey;
}
table, tr, td {
    border-collapse: collapse;
}
.top-image{
    max-height: 800px;
    height: auto;
    border: none;
    padding: 0.5rem 0 0.5rem 0;
}
.statement {
    margin-bottom: 1rem;
}
.image {
    width: 400px;
    display: block;
    padding: 0 4px 0 4px;
}
.info-area{
    padding-top: 0.5rem;
}
</style>