<template>
    <div class="photo-area">
        <div class="statement">
            <img class="top-image" src="@/assets/2023/2023-01-16/2H6A9802.jpg" />
            <p style="padding-bottom: 1rem; font-weight: bold;">오랜만의 해외여행 · long trip abroad</p>
            <p>코로나19로 인해서 3년 동안 많은 사람들이 여행을 가지 못했습니다. 저도 마찬가지로 해외여행을 가지 못 했습니다.<br/>
                올해는 다행히도 일본에 무비자 입국이 가능해져서 한국에서 가까운 일본으로 향하게 되었습니다. <br/>
                여행을 가는 사람들, 그리고 다양한 풍경들을 담아 보았습니다.
            </p>
            <p style="padding-top: 1rem;">Due to COVID-19, many people couldn't travel for 3 years. I haven't been able to travel abroad.<br/>
                Fortunately, I was able to enter Japan without a visa this year, so I headed to Japan near Korea. <br/>
                I captured people going on a trip and various scenery.
            </p>
            <p style="padding-top: 1rem;"><b>Location.</b> 인천국제공항(Seoul-Incheon International Airport) / 신주쿠구(Shinjuku City, 新宿区)</p>
        </div>
        <table>
            <tr>
                <td>
                    <img class="image" src="@/assets/2023/2023-01-16/2H6A9802.jpg" />
                </td>
                <td>
                    <img class="image" src="@/assets/2023/2023-01-16/2H6A9898.jpg" />
                </td>
                <td>
                    <img class="image" src="@/assets/2023/2023-01-16/2H6A9959.jpg"/>
                </td>
            </tr>
            <tr>
                <td>
                    <img class="image" src="@/assets/2023/2023-01-16/2H6A0122.jpg" />
                </td>
                <td>
                    <img class="image" src="@/assets/2023/2023-01-16/2H6A0124.jpg" />
                </td>
            </tr>
            <tr>
                <td>
                    <img class="image" src="@/assets/2023/2023-01-16/2H6A9844.jpg" />
                </td>
                <td>
                    <img class="image" src="@/assets/2023/2023-01-16/2H6A0024.jpg"/>
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
    name: "20230116_Tokyo"
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