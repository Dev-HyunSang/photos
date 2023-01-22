<template>
    <div class="photo-area">
        <div class="statement">
            <img class="top-image" src="@/assets/2023/2023-01-20/2H6A4905.jpg" />
            <p style="padding-bottom: 1rem; font-weight: bold;">여행의 끝, 귀국 · the end of one's journey</p>
            <p>도쿄에서의 즐거운 4박 5일을 보내고 한국으로 돌아가는 길에 마추진 풍경들을 담아보았습니다.</p>
            <p style="padding-top: 1rem;">After spending 5 days and 4 nights in Tokyo, I captured the scenery of Ma Chok-dong on my way back to Korea.</p>
            <p style="padding-top: 1rem;"><b>Location. </b>도쿄 나리타 국제공항(成田国際空港 · Narita International Airport) / 인천국제공항(Incheon International Airport)</p>
        </div>
        <table>
            <tr>
                <td>
                    <img class="image" src="@/assets/2023/2023-01-20/2H6A4870.jpg" />
                </td>
                <td>
                    <img class="image" src="@/assets/2023/2023-01-20/2H6A4905.jpg" />
                </td>
                <td>
                    <img class="image" src="@/assets/2023/2023-01-20/2H6A4957.jpg"/>
                </td>
            </tr>
            <!-- 세로 -->
            <tr>
                <td>
                    <img class="image" src="@/assets/2023/2023-01-20/2H6A4869.jpg" />
                </td>
                <td>
                    <img class="image" src="@/assets/2023/2023-01-20/2H6A4895.jpg" />
                </td>
                <td>
                    <img class="image" src="@/assets/2023/2023-01-20/2H6A4925.jpg" />
                </td>
            </tr>
            <tr>
                <td>
                    <img class="image" src="@/assets/2023/2023-01-20/2H6A4939.jpg" />
                </td>
                <td>
                    <img class="image" src="@/assets/2023/2023-01-20/2H6A4941.jpg" />
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
    name: "20230120_Tokyo"
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
    max-width: 800px;
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