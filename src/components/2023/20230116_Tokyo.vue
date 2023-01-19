<template>
    <div class="photo-area">
        <div class="statement">
            <img class="top-image" src="@/assets/2023/2023-01-16/2H6A9802.jpg" />
            <p style="padding-bottom: 1rem; font-weight: bold;">오랜만의 해외여행 · </p>
            <p>해운대는 다양한 모습을 가지고 있습니다. 해질녘의 해운대의 바다는 너무나도 이쁩니다.<br/>
                다양한 사람들과 율슨한 바다의 모습은 제게 있어서 너무나도 이쁩니다.<br/>
                사랑하는 사람과 함께 바다를 보며, 행복한 모습을 사진으로 담습니다.
            </p>
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