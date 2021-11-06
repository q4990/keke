

const jobname = 'shuqi'
const $ = Env(jobname)


!(async () => {
    await all();
})()
    .catch((e) => {
        $.log('', `❌ ${$.name}, 失败! 原因: ${e}!`, '')
    })
    .finally(() => {
        $.done();
    })

async function all() {
    //nodejs运行
    await dailysign421();
    await $.wait(1000);

    for (let i = 0; i < 10; i++) {
        await vedioreward421();
        await $.wait(1000);
        await vediorewarddraw430();
        await $.wait(1000);
        await drawreward430();
    }
    await $.wait(1000);
    await read();
    await $.wait(1000);
    await share426();
    await $.wait(1000);
    await receive();
    await $.wait(1000);
    await jsdailysign();
    await $.wait(1000);
    //await jsvedioreward20();
    //await $.wait(1000);
    //await jsvedioreward10();
    //await $.wait(1000);
    await jsshucheng();
    await $.wait(1000);
    await jsshare();
    await $.wait(1000);
    await jsread()
    await $.wait(1000);
    for (let i = 0; i < 10; i++) {
        await vedioreward426();
        await $.wait(1000);
    }
    await $.wait(1000);
    await read426();
    await jsread105()
    await $.wait(1000);
    await youxitiyan451()
    await $.wait(1000);
    await yuedu60miao451()
    await $.wait(1000);
    await liulanyouxidating451()
    await $.wait(1000);
    //await liulanshucheng451()
    await $.wait(1000);

}

function liulanshucheng451() {
    return new Promise((resolve, reject) => {
         const url = "https://ocean.shuqireader.com/api/activity/v1/task/reward";
         const headers = {
    "Accept-Encoding": "gzip, deflate, br",
    "Cookie": "isg=BFdXeyO3-isx_H4M334-JATd7M-hnCv-jtRPa6mEdiaf2HYasW2qT976Pv5GKwN2; XSRF-TOKEN=dc6dfd5f-72e4-4860-9ffd-9753598d9260; cna=yjS1GePU5joCAXjPBWQgkTxm",
    "Connection": "keep-alive",
    "Content-Type": "application/x-www-form-urlencoded",
    "Accept": "*/*",
    "Host": "ocean.shuqireader.com",
    "User-Agent": "shuqireader/4.5.1 (iPhone; iOS 14.4.2; Scale/3.00)",
    "Content-Length": "1841",
    "x-sq-req-platform": "iOS",
    "Accept-Language": "zh-Hans-CN;q=1",
    "x-sq-req-encrypt": "sdk"
};
         const body = "data=uBs0e8ncfJxiL34cGbc6iLS305aVuItcjz6oOzuBkro89l7XPq9hN4z5EVohs5Ye3brAIjafU5pd6T1UqJIEb9BltMhNHeS3jJS6UUtNF0jAS4POpAo8SmBbiGCv6Us03iLwm8RSV2hv41TOq0suTmIk0FJWxkcRKIaC8E5giw4jQQ8/LaVS6MNaMOWx/tcNexhfM6dCft9v7n8ARNFR67VhcFLPi5hpSbUCx1zE8bEJWeo4QGlTwe18Hu5s5GCT3I8WxJGo0CQOMNJL7NrRhAX8SGKUNXFgMn0DPBGKNUfLb0tdB8mk3pBb/7iPGwzDIyB7EdE1vJqhYRojJh5fGSSukEoRai/QRFzqhJd995tQri2N7B76LDQIvj2UrNN76LbQOqIQG9SdqC4XYzVh%2BCnBJ5/qRGnGcsSYne7AYk9dp5UAvkxMTLfck5CXnWQUXgTqV1ADzScKxXtmeBXlogqW5IxGUd4Z2L/sTIH52GvvnhzzOh46BezeaElKus6klfFyqvVGjkNpI7FJRDSFxmMYMRNG8J1Ae3NdjKdJfPYpW22/E9RmMdQ5fzXuAl/lQ4WUtQtnSRhshoDEimA4YLFcuZyzzBoTmENjhgRPlosr5R2aeZH9Mxx8lRSsoUakxE6ISEVdyyqqTihc%2BX6OwuDo86SxvMyzi2e0VG6GzeJhFUcRAKUvG8/43gDG88nhBnXXW6zDYfFiNcj2FYlzzSdxLOX66WL7Yr083CH83gNLbstBpiix8DNkuJtlHrwWGY6P0q4BXSFEwn2LgOtBgwprbFwYu52MJOAEMK0BKmT3od%2BQ4o2uVelEIMVHY84oWxp4qNngOJhlcd8AXq0IiksNcHIyQTXRDZkg9cMC/uW%2B6ee2%2BQbMb5xzH46va1uls5KmTuvu7BRPl0co7NVbJJCLIkPHQB2x%2BfZxFzfA6qxHzHt4U9mXdkcSr99dBH7Lm5oc3pWJiHKWXZVumYlfybJj2XAA/M7G/j05yzhpB0n5Bw5XugD6/LSMDMwVCO6mVCpCJJY0%2BsnX8yk0Eu2YG25vG7OffpI%2BhtKojHNOV72Q5GxYQr1v4KrTZGRSCaWcFwvheKB%2BrO3JfziTy3ewvIBDIq6gw4YaPOAD17EgoDDT/padb2OUDoApVkeg103AdIWrKHlzYZwljizx6CTQvLUvpF/2cbqieRIei2lBR8/r92ZJxHoMMNlu6KobrsracwEd5B1YoHbtG0C3B%2BMb/wmRPR1CryslXcbH6xSPv%2BlPfvZ%2Bdj8A2EstQQU9gkkLiZFrudOosfJHnkxgxxMHx8VD%2BnAUrzPp3Kc/oWkFNjfT2QHhSqzARRfEapxQzhImcUxWWdpoRPoXA4UsKc6sXyHw7NE7MrwbA7WhhoUb%2BNWKRQn8PYAzD1z8FEMbnCfqvQqffdcM4wwxQSdqJfBOjUxzfgkxE2iNeoaepIZ0AilmLje1qCPjWqQ/96k7EjAGTjKt5MNz48rtQRGbiJBGNeHNtCv4Pkg9nu/uIlX7XUP5aeqexDtYU6/t9al8QVaeeFjM07JtZCLx2id8zGV6M3oUKtqfQNDqGzspi/dfqkGN9N1UONWR8LXIAW%2BlfW4wMqR2w8G4d2Zr15mrnVhONGnTIQRyHx5ohFcTX0K4%2Bq1fDHvzB/bPO4W4sWuFTUTJ6WgOnqZYtMc3n/XZe5DJYaJdmaoo4mA2m3eLwsedMBjwuJfAlihWKIaCRWQW8nXmVvo/qr8j3CT7JKtj0v9sIlrL3DjIlFi0jAl6J6C3C5ySReouIAPUMFfM8NO2CdweJhkM2w%3D%3D";
        const request = {
            url: url,
            headers: headers,
            body: body
        };

        $.post(request, async(error, response, data) => {
            try {
                $.log(data);
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}
  




function liulanyouxidating451() {
    return new Promise((resolve, reject) => {
         const url = "https://ocean.shuqireader.com/api/activity/v1/task/convert";
         const headers = {
    "Connection": "keep-alive",
    "Accept-Encoding": "gzip, deflate, br",
    "Content-Type": "application/x-www-form-urlencoded",
    "x-sq-req-encrypt": "sdk",
    "Origin": "https://render-web.shuqireader.com",
    "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_4_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 AliApp(shuqi/4.5.1.0) WindVane/8.6.1 Shuqi (iPhone8,2__shuqi__v4.5.1.0) 1242x2208 Winding(WV_3) WK",
    "x-sq-req-platform": "iOS",
    "Host": "ocean.shuqireader.com",
    "Referer": "https://render-web.shuqireader.com/render/sq-welfare/page/welfare_page_v2/?serviceWorkerOn=1&stopPullRefresh=1&from=ShuqiTab&upf=20363&ustatus=1&contentRecom=1&first_placeid=111111&net_env=wifi&placeid=111111&user_id=2063328969&sqExt=sFdgPd6AXbAYc1k6Cr0ridOowNTC%2BfcG1H3lfwqXyvhsrDrbWtMFLJa%2BUBkgi5tztM2ce3HoBd4Ms24k7oNgL4VXwJFrKa3wu%2FT2ZxZZGF%2FfPpfWxEhmaVEPpCaH%2FUJUhFnl%2F9kyA2R6wFuQnHNuDwdqmQBZzCd%2BKoma41Mn0y56ai4wIcFksegEScWnidAEZFQJZON0c90z%2BXxyMqNT5r1gcEOX1rNPDvddk3DOuMJMV%2F9ZAmNZg%2BsAS8AJmBvkqMhCh4Or6AY0LbUXkJLSw0f7TmjdCVpgGX4DNBvgQXS%2BCzoNFeWY5o43oJCL&msv=8.0.0&brand=Apple&skinVersionPrefix=1&isTeenMode=0&appVer=4.5.1.0&skinActiveColor=0F9970&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDYzMzI4OTY5IiwidXRkaWQiOiIiLCJpbWVpIjoiRjIwQTE3RUYwN0M0NUY4NjU1MkQ2NEIyNkJFMkM0RTYzQjM0RkYxQiIsInNuIjoiNUM5REI3M0NDMTAzMUUzMTAyMDk0ODE0NEVGOTAxN0Y2RkZGNzgyMiIsImV4cCI6MTYzNjY3Mjg1OCwidXNlcklkIjoiMjA2MzMyODk2OSIsImlhdCI6MTYzNjE1NDQ1OCwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.6ShqEk2eLRytNWIc-U-qCgd6qQiu0Q0o9z9ylgg-PNmBAWyhQ6F210PWf_vZDInS8t0eRtnlbn54mRIBqqkiSQ&skinColor=23B383&platform=iOS&ver=210909&mod=iPhone6splus&personalized=1&skinVersion=1&statusBarHeight=20.000000&wh=1242x2208&soft_id=21&utype=vip&skinId=999&sdk=14.4.2",
    "Accept-Language": "zh-cn",
    "Accept": "application/json, text/plain, */*",
    "Content-Length": "2771"
};
         const body = "data=uBs8a%2BnteIFECX5bAa8siqK53caHvK8Q1m6ZAhmGrJkpqBiMTNc0dtziVlcegoVzosjESGnqVORQsXwosv9yb9gvhOR%2FPqy%2BrJmVb3hdWz7CC9nV1AtmT21S1Eiw%2FAkuhBva6Kk%2FX0ZL0GvJtwNoc1cPkXM9yzNZT%2B3mi0JSsgp5egdtXr9r6cYFMfX7hMVMdXAgVccSSJI3qD0FcdUoktYTBAy0zphtVaBe3Uq3v750MOttNVtjgtd6d%2BgW9E35qNh5wbiG3SI%2FC6IQm8DM3wPSfU2jAlJ8VHwjHzvFbFOqOhdZG%2B6U77JJ4rHbFFrTfmIHEKp02fvRKFBhVkF2CB%2BTp1hdaxGeZkzq4OIB%2F5hygTrQp2H6P1JPuDmV9Z4trfbZK50KC97b8A9TAjNnvX%2B3SZ%2FkOTKXV96ivdvES3xm6f8uoBkLepHbgI%2BSmkNtQgjpDSE81zErq15fZQ7HlQeLkLMbEt0g%2B7GSefHCrRjHwGrUHR9eX5SwNEA5vrPcirg3965nrQwbU7stXlCu6TpJVFQC4JEPQE0W%2FbwjCoJdU3n1avl4Aek3cT%2FOKRzyY8uBxHBlRil2nrSBqGw2a7tI5Jic%2BlJquENw5x1jrb16sEGBZYfRZRtq8VPJ2gjj7Hq4f1Y9%2BFvTNFwJ5AHB37iz9If3l8%2B%2F13a7QV%2Bav%2Fc9B0FGGu94Af7fjETd1ZrhRjW8eI3bYe4%2BcKm3BKxO%2FXh%2BTf3px23cIY8c8BzqhnApX8BwuQurkUQh5LNEKZ4iJ8iTlJ8iaSAgmhzTvKxrpRo6Bw9N4MniRbhXX8VeXC%2BS6ua%2BwZm4bdRRB40SKPhzYiF%2BsOifJb14SvRaRaV%2BmENMXC4GByHsE8Us37ICkqLW3M%2B%2BwUT7f6B%2FJ4eHD3C%2Bj8jNBcvy1lgtwH0n4MlnFJzOAEjvHjWjjZBLJhjC0pw%2F11VYe9azRlUPkOl3TEms4f8j5rWFoC29AuU%2F4f8zn%2Fd75Gkf6vWJkitupkRxezOQX2wfk1%2FW5br3JZdYQ7vPK3cQfthzkdfR9wEtJ764EQEsdsbCf%2Btc%2BpfT0ikEH9yqo3J6Of0Du8HSCBwlSIGCDkC5aNI3w5fmLUWYsWHPt6RWGsGQzNYQQqIv27tw9lzZnO7GfWGPDrBgMRCw81HvT%2FSgJUhmUp8bpWu5uSSNuI8PhQS9G9aJaBIukXBvYpO0%2BkdU0ldXRJxnz7UymO%2FgVDUs5xlugGeiRS6bFr5FrD2LOCpBrSMpIvD46gyPuakSJL5IaicO3httOAYooxVdztE3%2B%2FGhs%2BlMzA8rhEkx3f5Pry5Dvyfp98lb%2FjFFQ2OD3gfwXK2LAG71Mcp42VUPVh8Ec4pgM%2FMQB4EvS43reGGZx%2FA0Q7hoBrXRjYhrh8KlE033aMFnBF%2BeH2ESnS2yygmffcdZtVVuWRR9crBj0BMTNVxuXyKGOMueuYR0FTRCLj31plf0HuZ50qcgQUVLD3Xqr7A6%2FM72CmO8zL8JaZWS%2FXa8cAwa06OqUBLkdEjlaOOJlX1uBO3%2BhOk8HQOILg%2BJ17MnOVulkVkm1hArag1YUqW5VePmCTsHl%2Bp%2B4TrSorxoJf6R3em2AW%2BaRG0fZYxF1bOGWlBB1bW8uHJzViWuDgl%2Bdm8UgUE9eVfUo4ZAN2GfQpHoGt3P13bDN1qw9xR567B9u%2Bsk6Lz7OIHtWKtMlYEaynwa0gfzudyvLgGhmZfQilsFQ8H5GAhPmWzgWNpI3agw31iKK90f1fB8IBfHuy7xmDS0tnIJdNXICp%2FjMu1AUW6sUx6s8Ki%2BecQ1MiFUwcZ27qtVK9XYBPjAPd2F9UHqyL%2B90Iy84%2FkzowPTgEh3NCLvMqu0n9wag2p10%2B4yxyy0UcR%2Fa%2F2MLnxgyQrwb8%2FaI1E0y63NT5IbjEK0ACkYUFssdCeASL3WCKZQQG6W9QcklSOK4RAFUzhdZNipEFURsETpj7moumuSn8A5Nz1lwMxMxZIi7GpYZUgJNFCcthFPLEkCDi6d8jgYIMv03zNIIhAXGlX3IrFsoscKkyntouOnvyX09aW2IAGnyy%2BMvztmC1NSBHCkjwq5UUa3TgOs2Tzahu8Gn0rMrR0SddqyKByy4DT3cb3k9dUn5H6MxdeQTh2mBfV05CdZE%2BXJ0hnU276PNF9Z54MaUrJGdnqtCcrnBbjQflnsA4avwICtvxzix0hFp5uRGAxCXaJ%2BQhUnhupyNxST67TK21a9OeOgxEG7l3WOLFHrKyfdFXb3mDysV%2B5z37BI6jxS%2FS3%2B1jKp5n7Bf1RPM6XCQVTzBip3Fg4tKqluMqkCBdJcA13%2BsJEbBiJaQyApX7yTfQvWAhQw0snp7NeEYGTTjGNr%2F%2F%2FAsf4%2Brkgsj609HuCzSaInHz2EAYN4fg3b974YlLdBiDQqcPpMNlYcfJtJ7F%2BghIspzQaq%2BS2M44x08FNDiYqD27XO7WxpCwwE0gw9PpxkQSRvwefzVoYp%2FpzMm5rFljKIe8wBbl4p%2F%2BOFUtLQJXxAnvIn4%2FvpPxAX4wN2oP9KWsH%2Fgdl8s2%2Bl0AhUMC8Sg3PZZk5EHtAH9o10GYZWN%2FkSgAViGt6M%2FXrxqbFm8FK5g%2FcZ";
        const request = {
            url: url,
            headers: headers,
            body: body
        };

        $.post(request, async(error, response, data) => {
            try {
                $.log(data);
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}
  






function yuedu60miao() {
    return new Promise((resolve, reject) => {
         const url = "https://ocean.shuqireader.com/api/activity/v1/task/reward";
         const headers = {
    "Accept-Encoding": "gzip, deflate, br",
    "Cookie": "XSRF-TOKEN=dc6dfd5f-72e4-4860-9ffd-9753598d9260; isg=BAEBSxqqBNXNA2hKlcwwSq4vGkkbLnUgFBDurmNWkogiSiocq34C8kwIKDgM2Q1Y; cna=yjS1GePU5joCAXjPBWQgkTxm",
    "Connection": "keep-alive",
    "Content-Type": "application/x-www-form-urlencoded",
    "Accept": "*/*",
    "Host": "ocean.shuqireader.com",
    "User-Agent": "shuqireader/4.5.1 (iPhone; iOS 14.4.2; Scale/3.00)",
    "Content-Length": "1843",
    "x-sq-req-platform": "iOS",
    "Accept-Language": "zh-Hans-CN;q=1",
    "x-sq-req-encrypt": "sdk"
};
         const body = "data=uBs0e8ncfJxiL34cGbc6iLS305aVuItcjz6oOzuBkro89l7XPq9hN4z5EVohs5Ye3brAIjafU5pd6T1UqJIEb9BltMhNHeS3jJS6UUtNF0jAS4POpAo8SmBbiGCv6Us03iLwm8RSV2hv41TOq0suTmIk0FJWxkcRKIaC8E5giw4jQQ8/LaVS6MNaMOWx/tcNexhfM6dCft9v7n8ARNFR67VhcFLPi5hpSbUCx1zE8bEJWeo4QGlTwe18Hu5s5GCT3I8WxJGo0CQOMNJL7NrRhAX8SGKUNXFgMn0DPBGKNUfLb0tdB8mk3pBb/7iPGwzDIyB7EdE1vJqhYRojJh5fGSSukEoRai/QRFzqhJd995tQri2N7B76LDQIvj2UrNN76LbQOqIQG9SdqC4XYzVh%2BCnBJ5/qRGnGcsSYne7AYk9dp5UAvkxMTLfck5CXnWQUXgTqV1ADzScKxXtmeBXlogqW5IxGUd4Z2L/sTIH52GvvnhzzOh46BezeaElKus6klfFyqvVGjkNpI7FJRDSFxmMYMRNG8J1Ae3NdjKdJfPYpW22/E9RmMdQ5fzXuAl/lQ4WUtQtnSRhshoDEimA4YLFcuZyzzBoTmENjhgRPlosr5R2aeZH9Mxx8lRSsoUakxE6ISEVdyyqqTihc%2BX6OwuDo86SxvMyzi2e0VG6GzeJhFUcRAKUvG8/43gDG88nhBnXXW6zDYfFiNcj2FYlzzSdxLOX66WL7Yr083CH83gNLbstBpiix8DNkuJtlHrwWGY6P0q4BXSFEwn2LgOtBgwprbFwYu52MJOAEMK0BKmT3od%2BQ4o2uVelEIMVHY84oWxp4qNngOJhlcd8AXq0IiksNcHIyQTXRDZkg9cMC/uW%2B6ee2%2BQbMb5xzH46va1uls5KmTuvu7BRPl0co7NVbJJCLIkPHQB2x%2BfZxFzfA6qxHzHt4U9mXdkcSr99dBH7Lm5oc3pWJiHKWXZVumYlfybJj2XAA/M7G/j05yzhpB0n5Bw5XugD6/LSMDMwVCO6mVCpCJJY0%2BsnX8yk0Eu2YG25vG7OffpI%2BhtKojHNOV72Q5GxYQr1v4KrTZGRSCaWcFwvheKB%2BrO3JfziTy3ewvIBDIq6gw4YaPOAD17EgoDDT/padb2OUDoApVkeg103AdIWrKHlzYZwljizx6CTQvLUvpF/2cbqieRIei2lBR8/r92ZJxHoMMNlu6KobrsracwEd5B1YoHbtG0C3B%2BMb/wmRPR1CryslXcbH6xSPv%2BlPfvZ%2Bdj8A2EstQQU9gkkLiZFrudOosfJHnkxgxxMHx8VD%2BnAUrzPp3Kc/oWkFNjfT2QHhSqzARRfEapxQzhImcUxWWdpoRPoXA4UsKc6sXyHw7NE7MrwbA7WhhoUb%2BNWKRQn8PYAzD1z8FEMbnCfqvQqffdcM4wwxQSdqJfBOjUxzfgkxE2iNeoaepIZ0AilmLje1qCPjWqQ/96k7EjAGTjKt5MNz48rtQRGbiJBGNeHNtCv4Pkg9nu/uIlX7XUP5aeqexDtYU6/t9al8QVaeeFjM07JtZCLx2id8zGV6M3oUKtqfQNDqGzspi/dfqkGN9N1UONWR8LXIAW%2BlfW4wMqR2w8G4d2Zr15mrnVhONGnTIQRyHx5ohFcTX0K4%2Bq1fDHvzB/bPO4W4sWuFTUTJ6WgOnqZYtMc3n/XZe5DJYaJdmaoo4mA2m3eLwsedMBjwuJfAlihWKIGJTmQW8nXmVvo/qr9Q2VSII9oX1/hqIC/PqkrJ7CXF%2BQwPK9SyfZniOpogVQPUMFfM8NO2CdweJhkM2w%3D%3D";
        const request = {
            url: url,
            headers: headers,
            body: body
        };

        $.post(request, async(error, response, data) => {
            try {
                $.log(data);
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}
  





function youxitiyan451() {
    return new Promise((resolve, reject) => {
         const url = "https://ocean.shuqireader.com/api/activity/v1/task/reward";
         const headers = {
    "Accept-Encoding": "gzip, deflate, br",
    "Cookie": "isg=BDk58RKCfK1HRyCSjdR4YjZHQqETRi34nIimFltunGDJ4l90o5aiyvZ4YGAUwcUw; cna=yjS1GePU5joCAXjPBWQgkTxm",
    "Connection": "keep-alive",
    "Content-Type": "application/x-www-form-urlencoded",
    "Accept": "*/*",
    "Host": "ocean.shuqireader.com",
    "User-Agent": "shuqireader/4.5.1 (iPhone; iOS 14.4.2; Scale/3.00)",
    "Content-Length": "1843",
    "x-sq-req-platform": "iOS",
    "Accept-Language": "zh-Hans-CN;q=1",
    "x-sq-req-encrypt": "sdk"
};
         const body = "data=uBs0e8ncfJxiL34cGbc6iLS305aVuItcjz6oOzuBkro89l7XPq9hN4z5EVohs5Ye3brAIjafU5pd6T1UqJIEb9BltMhNHeS3jJS6UUtNF0jAS4POpAo8SmBbiGCv6Us03iLwm8RSV2hv41TOq0suTmIk0FJWxkcRKIaC8E5giw4jQQ8/LaVS6MNaMOWx/tcNexhfM6dCft9v7n8ARNFR67VhcFLPi5hpSbUCx1zE8bEJWeo4QGlTwe18Hu5s5GCT3I8WxJGo0CQOMNJL7NrRhAX8SGKUNXFgMn0DPBGKNUfLb0tdB8mk3pBb/7iPGwzDIyB7EdE1vJqhYRojJh5fGSSukEoRai/QRFzqhJd995tQri2N7B76LDQIvj2UrNN76LbQOqIQG9SdqC4XYzVh%2BCnBJ5/qRGnGcsSYne7AYk9dp5UAvkxMTLfck5CXnWQUXgTqV1ADzScKxXtmeBXlogqW5IxGUd4Z2L/sTIH52GvvnhzzOh46BezeaElKus6klfFyqvVGjkNpI7FJRDSFxmMYMRNG8J1Ae3NdjKdJfPYpW22/E9RmMdQ5fzXuAl/lQ4WUtQtnSRhshoDEimA4YLFcuZyzzBoTmENjhgRPlosr5R2aeZH9Mxx8lRSsoUakxE6ISEVdyyqqTihc%2BX6OwuDo86SxvMyzi2e0VG6GzeJhFUcRAKUvG8/43gDG88nhBnXXW6zDYfFiNcj2FYlzzSdxLOX66WL7Yr083CH83gNLbstBpiix8DNkuJtlHrwWGY6P0q4BXSFEwn2LgOtBgwprbFwYu52MJOAEMK0BKmT3od%2BQ4o2uVelEIMVHY84oWxp4qNngOJhlcd8AXq0IiksNcHIyQTXRDZkg9cMC/uW%2B6ee2%2BQbMb5xzH46va1uls5KmTuvu7BRPl0co7NVbJJCLIkPHQB2x%2BfZxFzfA6qxHzHt4U9mXdkcSr99dBH7Lm5oc3pWJiHKWXZVumYlfybJj2XAA/M7G/j05yzhpB0n5Bw5XugD6/LSMDMwVCO6mVCpCJJY0%2BsnX8yk0Eu2YG25vG7OffpI%2BhtKojHNOV72Q5GxYQr1v4KrTZGRSCaWcFwvheKB%2BrO3JfziTy3ewvIBDIq6gw4YaPOAD17EgoDDT/padb2OUDoApVkeg103AdIWrKHlzYZwljizx6CTQvLUvpF/2cbqieRIei2lBR8/r92ZJxHoMMNlu6KobrsracwEd5B1YoHbtG0C3B%2BMb/wmRPR1CryslXcbH6xSPv%2BlPfvZ%2Bdj8A2EstQQU9gkkLiZFrudOosfJHnkxgxxMHx8VD%2BnAUrzPp3Kc/oWkFNjfT2QHhSqzARRfEapxQzhImcUxWWdpoRPoXA4UsKc6sXyHw7NE7MrwbA7WhhoUb%2BNWKRQn8PYAzD1z8FEMbnCfqvQqffdcM4wwxQSdqJfBOjUxzfgkxE2iNeoaepIZ0AilmLje1qCPjWqQ/96k7EjAGTjKt5MNz48rtQRGbiJBGNeHNtCv4Pkg9nu/uIlX7XUP5aeqexDtYU6/t9al8QVaeeFjM07JtZCLx2id8zGV6M3oUKtqfQNDqGzspi/dfqkGN9N1UONWR8LXIAW%2BlfW4wMqR2w8G4d2Zr15mrnVhONGnTIQRyHx5ohFcTX0K4%2Bq1fDHvzB/bPO4W4sWuFTUTJ6WgOnqZYtMc3n/XZe5DJYaJdmaoo4mA2m3eLwsedMBjwuJfAlihWKIaARGQW8nXmVvo/qr8nrVD9U9wSofkRUl3O2UK85VjG9gl7K92/C%2B6QTe5UJgPUMFfM8NO2CdweJhkM2w%3D%3D";
        const request = {
            url: url,
            headers: headers,
            body: body
        };

        $.post(request, async(error, response, data) => {
            try {
                $.log(data);
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}
  






function vedioreward426() {
    return new Promise((resolve, reject) => {
         const url = "https://api-access.pangolin-sdk-toutiao.com/api/ad/union/sdk/reward_video/reward/";
         const headers = {
    "Accept": "*/*",
    "Accept-Encoding": "gzip, deflate, br",
    "Connection": "keep-alive",
    "Content-Type": "application/json",
    "Host": "api-access.pangolin-sdk-toutiao.com",
    "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148",
    "Content-Length": "4648",
    "Accept-Language": "zh-Hans-CN;q=1"
};
         const body = "{\"message\":\"2emzU7673msf59DkREVRIxaG4Dyi0VWSwSv3210\\/O+MU4qEUkC9ARCp+rhQCknpwgwkiDTvON61bY2ySdlYicxQkUDmkDDyzhi5LKKjU6K4AjTYo98RaHsfhI7y9tEnpa6abibrPLfB0ZAa32u5AtBurLwbP6vZ\\/nZedNlpCiq2GyNNfghAsAawvabHrJ0QkvbuN\\/KyGy4WyAK6BthLibQhiDWWCyetpwzrJc3fIVkjEzHL3EhTEUN29x5vSEfXV5N5RKtMDrGn0Jbn+TqmzOHkxwGXI4RA6htx+KGFWt\\/uBksfTGCX10Df0EMBymHma3PmLYs5CFbn\\/anPU3A9mWx0DqjolFPKWZOO8Y76IUDsqHOfbqp4h\\/l74HKQMRqB3gqb9bO6X+KB04LBnqMxyso1CInZJcsFUJKwqRrvaAJWXcZt1TtRlu5pDbmbFygG4\\/j7MvT01LXxhGSX9U48TjpbKEWmsWmiv+ZNWYeSV+iuLrxtDEVuNyG2MCW8e\\/aWxpkbtb5qxkww26WL3u02KWAuBMrtteFcURD3V+zNe6toKR8eWYgX2Tu0qmB9Q9hJsXLVt2QXyko5CHbVuiC6diQbW+KWMwsTDhqYNiklJHZcJ7jRBVaE1x6RzpiXp9Mrc\\/0oq9Fz2vD63MZW7A62b0De8XQbacpz\\/CogL8ztGpumiMImKC7snfq6oTfI5x8bIkREjnPqrhLgFYsC1\\/IZR3DK678LzGSi1Y8qRkw9et9r9Wi9UcireJ7F+UsNbxkdIxhHdl7daGet8jSdm3FDSCJIrTLjY9GMdD4YlAnUNPbvo8+6neQA4ypLqOKHDRIEwwXp8GyQxwZk8tPYTp3yChPNVTH5MotXzyA\\/Cm+5ipz74X0jSe3X5KW4C0ekqkBxAU7GBRAU7EA6oBfgWET7xuybC41iVAk5WB9w3M7t2xPzmj1mCEIRgOcSd72BTXFabQI5AVElN5HXd4kXnK3repQfBOVA3Ph4Ant++IXqZjxa7Mp1CeRZQh6coT+veVvK8QhQepkOK3t63xpAaSrhU\\/T2pjbvMfjuVY081dIjwXO8c7VIIy+MTOGOCYte62VOWluV86lKSQMlK7FPpUz9Tr3B6wJF6RFZrna10lEV0kxalDDdwmThNVAH0mC\\/cH3fe17C876XI2VZnktZziSzSmFYYDnOKOA3Ge0xe\\/H394mzEsWjpYbyAcKnLfXeNixHd\\/z2GGPROvQOH3AeBzJHw5Ism6PwdDq7e3VUr0p4oJe8kB7E3Vb8NMujSFfECTTtR7jCQlEBEzPRcqkd4478LfIDJcXn5pR++znE6O3rek1cjN7kgJ2cTBBCpq8mG3VEwhQJhPl28G4ha0FrslfixCLYelyvK2TutVOevmZfYHD8IEb1cP7nw0jPnX7jRM\\/LfFgMQInGbQHBrO\\/OnInNB7bJPOkehDblo5LZSA+HYHbMchPtcVchXF96tpFC9IPpo6ClILHDh6sJXRQb\\/fUsAUHf57ANCN3GphbVfaoorwqOXfhgYtdCzD3AMp2h76MdzQq83tFYcexj\\/R0QEq\\/zb2iZAFQeGNjLVG\\/s\\/uRivqzBiPWVk3NRSGLk9O8niyjJmuoqm3HUDfrbElvzJ7uvNfPk1CX8YOM8L2QbhfTiod3eRc5VVHsstnf48BWNEt45j2xzmG3bDcKqSazTnGg\\/6\\/zG0wj0jaws4uZsqkzzFlmRSVahi0e2rSSDpXCinRJTK\\/4K+HMODn5QPHeAnEMxbvs\\/L9lt+aUszoUVJWjnkLyHZwUmdjGmn9UGFH1JOdUAi8rfvqPtWnG+BdxG5R81maP0Tb4DP7oTYDFLy86QP9NdSYvFPuU4FSKewihMuirmuZ8L+9lAS\\/vqDAGGCh6iq\\/JkU4\\/fPDWfz\\/j1KnnMo2cPsfjSuDxLXCefcTfLytJ34iYnafp8lma28HvpOo4I5RWLhFRSZOlrxQLIakf\\/F4mESndA3gGJBCRQTT2J4CuLNvq5Uaq+4+mc+FPkmWpAIDpJz4apvBUV4Xo0pBbL5VmMAV\\/rxaiujlcyc7s3K9DetXsrKPtceRQ9bls0Kr69Q\\/1eEC+1kiMgJUNxcXraO+ahjInAyp+G7q1DBMwmhHup5gw5uBB3ZSz25FCPJL\\/VhgcDepPNVkj9LLAkp1Gz3Tig+6hE5dAEDZMf3XhMK4Uvu5HjUusFAeGGIu+DNr0vjGYT4BH0kds9QaVr8o82xDFZcFNktYto2T5GcbZ2pRsQ8lHVoSm1p6feZImnkvImn4oJ3onadcB+V2mz4S0z9P\\/B9RFPuFtw02xw44JmzXSfGKyno0xkANtMlrHfLYaI8t4ur4DDQaS7ncZ5Do7xQoT+5zFwqFk\\/Ra\\/4YtwHZDSZ2bicZc9LmwGxKLqPK1O+Y1GSOeqJUZ9\\/2rLVwtX4fzqhH7J6iCXjNsx75UecQPMChcn\\/cnQJ9TiovTLV3DkgyGL3JCrqujc1U3L7OZqp5bNrc0HLI4qieb1ZcjzFcPMN73B5az88tqGx\\/MNn10r6nM5K0t5yek4iw1sEBLuVPgGKhaFPNyiKg9VC9ZAG4\\/QsfHQhwOQKJ\\/CRIfFQnFl7Wf7eOWST2YPufGbn7H\\/vU3\\/S93\\/ifc6hOFQYP0EpWmM3Dwao2Kvo6vYR2yhoHpq3Drv4jGwL5Ozhpafi219lSXTB+k2Ly+yw3ys+asuclGVF\\/+9pAbZRrYgxroXensZvEz3EYdKHJtj\\/h85nTrb1zFWxA+GFITGYB+fzyb88cbrdo8Mw54xWM2KvNmd1tLFAbt6Rrourl3QPt12pY60zT3kRGImKqi2sYdfspRGDKwP\\/+ItNizBey6bCcL1zO0AJgCw9Dm4peLIofds5nAgo4l4ET11cfREOXgkY\\/D4tScmoOHE\\/Y+4P7V3Z1FcskKOKIjfl8FPUODXwTci4wE72BSFoK0PHaRCjp9l+PwFVgKzZE6NE+jF\\/JfL37YyCwLOtTuRAc86s9+uomVuAh7O1qsUlO00T+1EI94NkDsH1s08RBU0\\/0TmtbZ8c9wHjBbkdTBdCmF5XB6nM0XeOtdfNY7dpgl9ngt3dNBZmFt7Kq3Lp\\/OLxE3T\\/PmLutXx1HATlNZ4jKw1IT2qmwZG3jPyFPAiRD45NCVX\\/0p2IToHf3CrYGpfy\\/XS+B3E2ZfgLPZeRQvFPRv1fda43ULdltHiz2EmxctW3ZBfKSjkIdtW6JK9h2tf1ZgDp1FLjuljU+Ee854HSR6dvudgRvodORnOD6fPkB+eiN\\/5P+WVIKzA0X3Ric0sY0NFqpqsjbUX1A1KGx9Q318XNymxAZ1AN+hnNg29evBNe09PV84b3Yq8B\\/S5gRRa0nJt8uwtNh\\/bxih0FkajVUtpjESZpBUiiBcN3iodElIbUAJtnsZ2i5PNhTAlLEu6efuBfp5zmTgHleK9VQyRXA45zYdNOHqTNnfye3MS9mDl69OC\\/cdCGIM+scA\\/qsSVhFgh5Vf9GkM\\/QXhU3RE\\/f1497587OTRzJQ0LQS1syE8XwH6P5TItZjzBXk8TUr6ozXs5Kw0V+V4cYKZBrsEkaLCEMhmaQNTl0bgJ1MzlmQ6bsAbetdBjYjpE\\/stVARS8S4roqU1oaXXdmKFWn0\\/GqMbQDRKZGwz0pHzVgGiMO34mwOyZnH2nweSpRDXZ6xLJ\\/kByaBb1LSyxHgkwfK6qde47mNuJJ0Db82O5\\/5qf\\/1qbKYOQEDsXSQYy4UVkr3C+vh5UwJMCILjeyQNv4Iwvuthax4ORxlsgepJ\\/lwHS1YdAnXAfzqNO6fjXj\\/zQRSoR6HfI4kAMYHfP85eJmADbVQkTr4vzsutA0RBJY4MK+6pNrLSxI5eUoh\\/6DzZFOjMPcSDzjrOxrtDoEgnCLN124HG2UwLUHAGBdaM0VJAgriZP5iSherw+Eqbxam7y54UpmlcS1DzyiSKgTB9eYoFgtv9CzSOgttCzPApkjdVcJJxpp1Zp0f6cByg19MbXG\\/3CB8Uee9LZHLrXQMUjS2cNghN1bRcXj4qvXIC0ikI5WgCdVBFNts0My0KUizCySobLn2i3ElNB\\/HGwQItFoFrqCH8wleQ2C29HSvgLcoAtTmfwPjoOjD48u2rbBp5wB2cBoBxkVni7ykHcmDZcCAzXaMRc\\/P8L4Vl1ik9fUcmabATkE9xm71kSD7fvlV5FFlOwcnfGFrqnGAlP9MzcfoObx279ow39hFCOyyD\\/3Abz5paNceK2p7q\\/QWY3VQkspxhDNKAum9WZ15Ryj3c7P\\/GXfxCBkKErZlkSyLZy0T8py7vekZ4WhFjR1ugh9me4qG+JBV1wP2QNqu+qZ1vGWfiORUOcT96zwVncvh+Lhb7Fz+R9u1hVeHtP+7hrmLOa7Qm7S+egG7oYv0gkWpmcYfGDoCjjPvTNzdbDgMQsQIiwQt2s\\/GRzQDk\\/+qxCtMNPo5k1WMDwdIvsNhmV6qqj3VYfYEwwUt1G4AUL2f1jXUKMrbf8aixTU7Qh\\/WktGsdzAe8RagWriAnY7r9OjYWhW1cvU\\/zsMZ2uw+wQSbUtbEa3wqs31QhiuQqahpFTWg=\",\"cypher\":2}";
        const request = {
            url: url,
            headers: headers,
            body: body
        };

        $.post(request, async(error, response, data) => {
            try {
                $.log(data);
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}
  

  





function read426() {
    return new Promise((resolve, reject) => {
        const url = "https://ocean.shuqireader.com/api/ad/v1/api/prize/readpage/pendant/lottery";
        const headers = {
            "Accept-Encoding": "gzip, deflate, br",
            "Cookie": "isg=BJWVwCP9WMjvbHw07CngquuyrpVPkkmkfsWvxRc6UIxbbrdg3-LsdoA8PvRY9WFc; cna=wVmjGXEJsiUCAXAfvZEK/5zJ",
            "Connection": "keep-alive",
            "Content-Type": "application/x-www-form-urlencoded",
            "Accept": "*/*",
            "Host": "ocean.shuqireader.com",
            "User-Agent": "shuqireader/4.2.6 (iPad; iOS 13.2.2; Scale/2.00)",
            "Accept-Language": "zh-Hans-CN;q=1"
        };
        const body = "_public=skinId%3D999%26idfa%3D021BC905-6AFA-424D-8B50-99F11074780F%26ustatus%3D1%26first_placeid%3D111111%26net_env%3Dwwan%26umidtoken%3DYRxruFbmacIDADjqvrFJgz0i%26user_id%3D2916901745%26sn%3D2C6C8B4E89B5253B7A6EFE559CF0C08C1229D01C%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3DBA06F6AB9661003A1DA723B28A1AF20643BB3296%26skinVersionPrefix%3D1%26appVer%3D4.2.6.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyOTE2OTAxNzQ1IiwidXRkaWQiOiIiLCJpbWVpIjoiQkEwNkY2QUI5NjYxMDAzQTFEQTcyM0IyOEExQUYyMDY0M0JCMzI5NiIsInNuIjoiMkM2QzhCNEU4OUI1MjUzQjdBNkVGRTU1OUNGMEMwOEMxMjI5RDAxQyIsImV4cCI6MTYyOTc3MTE1NiwidXNlcklkIjoiMjkxNjkwMTc0NSIsImlhdCI6MTYyOTI1Mjc1Niwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.PPT_1Wimc2dL141NpVNCweAfe-uJOvy18_UxEwg7VAF-amgti--izqVsPN0QJFuvT5YCojiB8Pn8lvupwboHSQ%26skinColor%3D23B383%26platform%3DiOS%26ver%3D201102%26mod%3DiPad4G%26statusBarHeight%3D20.000000%26skinVersion%3D1%26wh%3D750x1334%26soft_id%3D21%26utdid%3DYRxruFbmacIDADjqvrFJgz0i%26utype%3Dvip%26sdk%3D13.2.2&deliveryId=531&key=sq_app_ad&miniWua=HHnB_xPXK19arARvcrQepQw5tGVMuA1Q9DUHiWCJm9nGcwpspzMwcskQhXo2LQ7esM7LHlgp9UFCSNJIaB/azua2UywuDTc9nzfZGax3GHldNa//kamdwqXBX0bf4bK4u6k6c&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=678&sign=0FA00ADC614941171F259622F0234BDB&timestamp=1629252811&userId=2916901745&wua=HIVW_gka845tP4apVJpT8T3jvuTCLAlAdR6ZSX2hU/OKCP9NKuytiA6UpqB/DtGEhj5QuiADEypSd4LPac8cp8V7G/F%2BJsiO3yWaNRrkVDywhs1E3oEwWwzwBhdem93cpQj4Tzeh4lDq75qyHoVNw7dKHnAWzRKIjnCAs30ojR0TgFdm89VgM0xjNtFHvdF5yqcEwJkhnYi7D3xNjL5kJ/mF4I8SBoiTEhb0hYK1lh56K1D7b1N0sEXOkozMvbfVfo9X3oRIPhcPo3DKKHsSmNr4iPsk9y4zVLa2yFoswD4Re9t%2Bneo77L%2BBW%2Bxaw1tnmLzm3jec4z%2BIlNrXyAFg0Bh1wuA7xHu0AbTVnrut88Zb28gO2puegDsurUx4y4KlYIcxw";
        const request = {
            url: url,
            headers: headers,
            body: body
        };

        $.post(request, async (error, response, data) => {
            try {
                $.log(data);
                const result = JSON.parse(data)
                if (result.status == 200) {

                    if (result.data.chanceCurrentCnt < result.data.chanceMaxCnt) {
                        await read426();
                        await $.wait(500);
                    }
                }


            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}


function receive() {
    return new Promise((resolve, reject) => {
         const url = "https://ocean.shuqireader.com/api/prizecenter/xapi/prize/manual/receive";
         const headers = {
    "Connection": "keep-alive",
    "Accept-Encoding": "gzip, deflate, br",
    "Content-Type": "application/x-www-form-urlencoded",
    "x-sq-req-encrypt": "sdk",
    "Origin": "https://render-web.shuqireader.com",
    "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_4_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 AliApp(shuqi/4.5.1.0) WindVane/8.6.1 Shuqi (iPhone8,2__shuqi__v4.5.1.0) 1242x2208 Winding(WV_3) WK",
    "x-sq-req-platform": "iOS",
    "Host": "ocean.shuqireader.com",
    "Referer": "https://render-web.shuqireader.com/render/sq-welfare/page/welfare_page_v2/?serviceWorkerOn=1&stopPullRefresh=1&from=ShuqiTab&upf=20363&ustatus=1&contentRecom=1&first_placeid=111111&net_env=wifi&placeid=111111&user_id=2063328969&sqExt=sFdgPd6AXbAYc1k6Cr0ridOowNTC%2BfcG1H3lfwqXyvhsrDrbWtMFLJa%2BUBkgi5tztM2ce3HoBd4Ms24k7oNgL4VXwJFrKa3wu%2FT2ZxZZGF%2FfPpfWxEhmaVEPpCaH%2FUJUhFnl%2F9kyA2R6wFuQnHNuDwdqmQBZzCd%2BKoma41Mn0y56ai4wIcFksegEScWnidAEZFQJZON0c90z%2BXxyMqNT5r1gcEOX1rNPDvddk3DOuMJMV%2F9ZAmNZg%2BsAS8AJmBvkqMhCh4Or6AY0LbUXkJLSw0f7TmjdCVpgGX4DNBvgQXS%2BCzoNFeWY5o43oJCL&msv=8.0.0&brand=Apple&skinVersionPrefix=1&isTeenMode=0&appVer=4.5.1.0&skinActiveColor=0F9970&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDYzMzI4OTY5IiwidXRkaWQiOiIiLCJpbWVpIjoiRjIwQTE3RUYwN0M0NUY4NjU1MkQ2NEIyNkJFMkM0RTYzQjM0RkYxQiIsInNuIjoiNUM5REI3M0NDMTAzMUUzMTAyMDk0ODE0NEVGOTAxN0Y2RkZGNzgyMiIsImV4cCI6MTYzNjY3Mjg1OCwidXNlcklkIjoiMjA2MzMyODk2OSIsImlhdCI6MTYzNjE1NDQ1OCwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.6ShqEk2eLRytNWIc-U-qCgd6qQiu0Q0o9z9ylgg-PNmBAWyhQ6F210PWf_vZDInS8t0eRtnlbn54mRIBqqkiSQ&skinColor=23B383&platform=iOS&ver=210909&mod=iPhone6splus&personalized=1&skinVersion=1&statusBarHeight=20.000000&wh=1242x2208&soft_id=21&utype=vip&skinId=999&sdk=14.4.2",
    "Accept-Language": "zh-cn",
    "Accept": "application/json, text/plain, */*",
    "Content-Length": "1803"
};
         const body = "data=uBsoe%2FjLUJYNejhLC7sri6SjyNLJ6%2BIQnCCwPym%2BgaV%2FoV7cPrlhet78NFoh2Mge07bHPDGCUIpJ8nsB691DVNE0y4QfXqz2yfHhDQwbRAeICdWD6wpyETYM0SH0%2BkQggViam8RSVnxN0BiX%2BwNwChRxgkQdmwseI4ac5ihzywp2Sggpc7cXu5gMTOCmr%2FVQcxQcNKkaKItv8m5oI%2FsEp6ZsaxaT5LIeJf9XgnuEvYoeN4pKBlp0n8YvDJB900bRj9RD1LWzwzseMbgWldrSxUfwV1yVPHNGBX4SNg%2FHOzLcLAsEDJ2FxZF15oCPGk%2FfN2N1Z9A3u5i2JUxlcQRPHkb62F9bNx%2FCQ07RxMYk6soA6y6N%2Bki9N3VV7m%2FA9JJ07%2FKSbuF%2BVN7d7zVAPXVvvHKfd4%2BjDTqTYsCVxKueOBsCs4AxqRhOX4n02u7o2xNrCVaFWVFi8SEeziI%2FEW2a6iqLvZsHXqkaxva6LsfRiEH7zF3DEEBkZq%2F%2BPRECtc%2B7yLoX%2B6RthRU9d7s%2FVBOz8AJFcRxX7J4DOStImZAaO6hGCDzkU9NXP9YyKDuaBRasGNCX6lx6Vxdjs5HDi2wlM6BerJa%2FkkxFrwEv21wbgKYE6BGQdZzXf2Vx8EvL72q9%2FiHDXxkk9XrTMm8ivgfSvZLB7Ju4mpads1f7eGPUl8IIYh5GOpUoIcDQ1Djwy9zxdBDjU7bcZMYtTonUJL8z9h1GfpiOwSv%2FX4ZP8SLmhgRpaoNamyyh9GEAm69EKegTBL666o01IDd24UigoJZ9nj0QUHwFvZCaI8ZQNbkhVkCOhtee%2FLy2T%2BphE%2BJ8S%2BUPVgYZs9iWWoN5UNZ%2FR9w%2BkSJgDEoMKj%2F0JswX%2FeMyw8eZ%2BZ6%2B93%2BodpFQNKqIAjqDgI3GaOHqzB5ZrGIh6NB%2BOLfRGUvkMmLMzf9FDDLRlbZB%2F0Vlf8yyVm9r1tZMbUrAp5hixJCg9w2MGK5n8Yhh6ZZTolAgxvTixksp0SkNJ3%2BTNzR0iVze54qHFfwMUaTISS5QCpFt1u%2Fq4xAQBJa2THY7JbSTKOscnsiU0U4WXMej61hgfKAM2qGPaHFQQoC0ViSxe9ZeocjfPyu%2By2qq6rYAHqSGwIhLGKF%2B0IwAgxSbwbagDmveDrx3UEX%2B71KNFfK9cREhEZgWvT3z9AmQ8NxFmgLtHMbLPVlowTVnWpj7%2BHJO8lcPQ8lk168x7urpShQm7wpnmnX6EDXMQqJD%2BAC1KClbkC0lObSu%2F0Xc%2Fe9XVflPUTYGzQZqOAU%2B7koDioRpv4WzuLsQwwo%2FmhJxnrI2rC1EqB3p98lY%2FiYBBivV1V%2FyarjDBTjrNuV1whxaDloSfoVgM%2FYPAp4sS43seXqik81MBfE4VuGE%2BvYq%2BqWLBk%2BPHqQ9GUqKO1cW1TrhtkysKOY98Q1EdHMoM%2FJPjExzdQkxAmKKPdmyjOkhQW1Jdx%2FW3VDqTaQv97M7MyIwVDKqxeVq5sb6LUbi%2FuRPTefK1F%2F%2Ben9o39ylVgG8J2KmOsDY10pZU9z3gK9%2FM1WaGyzL5vwhMwCh1VYPhGJ5NHsGNdyubYWzcGMPmelZrTLq691nCYO6pKC%2FdnKjOTEjPKp1%2BOmkVkkV1dyen0RocwCuFwRbX0YIyRstflL%2F%2F4hePF2ZW4LTZ5e%2F%2Fw%3D%3D";
        const request = {
            url: url,
            headers: headers,
            body: body
        };

        $.post(request, async(error, response, data) => {
            try {
                $.log(data);
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}
  
  


function share426() {
    return new Promise((resolve, reject) => {
         const url = "https://ocean.shuqireader.com/api/activity/v1/task/reward";
         const headers = {
    "Host": "ocean.shuqireader.com",
    "Content-Type": "application/x-www-form-urlencoded",
    "Origin": "https://render-web.shuqireader.com",
    "Accept-Encoding": "gzip, deflate, br",
    "Connection": "keep-alive",
    "Accept": "application/json, text/plain, */*",
    "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 AliApp(shuqi/4.2.10.0) WindVane/8.6.1 Shuqi (iPhone8,2__shuqi__v4.2.10.0) 1242x2208 Winding(WV_2) WK",
    "Referer": "https://render-web.shuqireader.com/render/sq-welfare/page/welfare_page_v2/?serviceWorkerOn=1&stopPullRefresh=1&from=ShuqiTab&upf=20363&sdk=14.3&utdid=YRPHOvDewScDALPRGBH3kbX0&ustatus=1&first_placeid=111111&net_env=wifi&placeid=111111&user_id=2082127980&sn=08F7FE3B83E32D8F65DCECCBE4629C63178A61CF&umidtoken=7aVLWehLOiVYYDV77H3sI5UY9kx1cFnt&msv=8.0.0&brand=Apple&imei=59AF196F729EC9BBEE11F988A182A7CE8CB76B9E&skinVersionPrefix=1&appVer=4.2.10.0&skinActiveColor=0F9970&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDgyMTI3OTgwIiwidXRkaWQiOiIiLCJpbWVpIjoiNTlBRjE5NkY3MjlFQzlCQkVFMTFGOTg4QTE4MkE3Q0U4Q0I3NkI5RSIsInNuIjoiMDhGN0ZFM0I4M0UzMkQ4RjY1RENFQ0NCRTQ2MjlDNjMxNzhBNjFDRiIsImV4cCI6MTYzMjMyMjkyOCwidXNlcklkIjoiMjA4MjEyNzk4MCIsImlhdCI6MTYzMTgwNDUyOCwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.V0vs1cjUaIYpquFJ_ogFRevqS9sZ62dCFWvcU4rBHU2ivWN8TgnedJsKoER_5Q0UGZOEmFKSCo3u9GFGJg8csQ&skinColor=23B383&platform=iOS&ver=201218&mod=iPhone6splus&statusBarHeight=20.000000&skinVersion=1&wh=1242x2208&soft_id=21&utype=vip&skinId=999&idfa=11A1346C-AA3A-456B-B89B-ED8E1A043AE1",
    "Content-Length": "1963",
    "Accept-Language": "zh-cn"
};
         const body = "actTaskId=304&wua=HIVW_e%2Bg4XdrEgEBghlT8sDEgMBBzfjIX4Em2I2Cpi%2FZ4s1h7%2FyVQ9G28%2F%2BTmO8vxWXBdc4KqU6pxKd6YNQDsrh7OpXeGZHI0NqNRGKMZYLJq7agj5fw5OkwKpe065tOnlRzYK9fnREWLAavCxfsgQMO6VFrvFNTHmzFcGnMj0FnSkBgHak7O%2BAw54BuDUt0g9%2Fr8g%2B3H%2FF1Hj9DlN7hD7hpPugGIjP7TSjrC5ft2MwisaAtDpABAzUuZGg9nELsLHmh9WXzaMBd3LPjlwaPlChNZmjMBe4LEbDWnswkuOF0b1id207k0wHRT6mUX%2FeKSy0gw3HSkw%2BfrLeniL0nJo4JKJ3%2FozdIk7%2F1p4UfoYI9yRnZJKWP76wHbrnEEhPXRNayX&ua=&miniWua=HHnB_6LQHw%2Fj94q70IFeXzRHTUSkJZ4YM8kgedFSZyqqjzvjyLVEmVH8dpRQplX8HrrTfwKLKVrMtDYhBgKOwIummgNQ%2F3OizjD6nuy%2BX%2BekSCtlYCVWON0QUqyfNvMBx692%2B&userId=2082127980&umidtoken=7aVLWehLOiVYYDV77H3sI5UY9kx1cFnt&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&platform=1&appVer=4.2.10.0&placeId=111111&timestamp=1631840649&sqSv=1.0&sign=16c57ef7b200a371ba5bae51a509c688&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20363%26sdk%3D14.3%26utdid%3DYRPHOvDewScDALPRGBH3kbX0%26ustatus%3D1%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2082127980%26sn%3D08F7FE3B83E32D8F65DCECCBE4629C63178A61CF%26umidtoken%3D7aVLWehLOiVYYDV77H3sI5UY9kx1cFnt%26msv%3D8.0.0%26brand%3DApple%26imei%3D59AF196F729EC9BBEE11F988A182A7CE8CB76B9E%26skinVersionPrefix%3D1%26appVer%3D4.2.10.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDgyMTI3OTgwIiwidXRkaWQiOiIiLCJpbWVpIjoiNTlBRjE5NkY3MjlFQzlCQkVFMTFGOTg4QTE4MkE3Q0U4Q0I3NkI5RSIsInNuIjoiMDhGN0ZFM0I4M0UzMkQ4RjY1RENFQ0NCRTQ2MjlDNjMxNzhBNjFDRiIsImV4cCI6MTYzMjMyMjkyOCwidXNlcklkIjoiMjA4MjEyNzk4MCIsImlhdCI6MTYzMTgwNDUyOCwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.V0vs1cjUaIYpquFJ_ogFRevqS9sZ62dCFWvcU4rBHU2ivWN8TgnedJsKoER_5Q0UGZOEmFKSCo3u9GFGJg8csQ%26skinColor%3D23B383%26platform%3D1%26ver%3D201218%26mod%3DiPhone6splus%26statusBarHeight%3D20.000000%26skinVersion%3D1%26wh%3D1242x2208%26soft_id%3D21%26utype%3Dvip%26skinId%3D999%26idfa%3D11A1346C-AA3A-456B-B89B-ED8E1A043AE1";
        const request = {
            url: url,
            headers: headers,
            body: body
        };

        $.post(request, async(error, response, data) => {
            try {
                $.log(data);
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}
  


function jsread() {
   
    return new Promise((resolve, reject) => {
         const url = "https://ocean.shuqireader.com/api/activity/v1/activity/pendant/lottery?sdk=14.3&ustatus=1&umidtoken=HipLZy9LOj7G6DV8St6BPczT53GRCdbm&net_env=wifi&placeid=111111&user_id=2038268844&sn=EB557BF550DDDB0F42451F5641E634E01CDFE75E&msv=10.0.0&brand=Apple&imei=718BABBFD306E93F02574358B53E9AEF98E32121&appVer=1.0.4.0&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDM4MjY4ODQ0IiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF83MThCQUJCRkQzMDZFOTNGMDI1NzQzNThCNTNFOUFFRjk4RTMyMTIxIiwic24iOiJmYXN0X0VCNTU3QkY1NTBERERCMEY0MjQ1MUY1NjQxRTYzNEUwMUNERkU3NUUiLCJleHAiOjE2MzM5MDc3MjgsInVzZXJJZCI6IjIwMzgyNjg4NDQiLCJpYXQiOjE2MzMzODkzMjgsIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9.ZRoTEbgp1KBVzfrWiY0mXlPvV_kynpWf0azAmVt7NdIGOOt5SAkAi-D7hgxPTrtjUyK9p2YHVyHqIIDSrSXpxQ&statusBarHeight=20.000000&platform=116&ver=210309&mod=iPhone6splus&wh=1242x2208&utype=vip&utdid=YRjKkqmnuBoDABOa54Af002O&idfa=11A1346C-AA3A-456B-B89B-ED8E1A043AE1";
         const headers = {
    "Cookie": "isg=BMXFDnxTCB-_6yzazuUjUNdm3gX_gnkUfBAivccqvfw6Xv3Qj9O-5Sp0bASoBZHM; cna=fjPcGXV0LlACAdoaNxHiMLTA",
    "Accept": "*/*",
    "Connection": "keep-alive",
    "Content-Type": "application/x-www-form-urlencoded",
    "Accept-Encoding": "gzip, deflate, br",
    "Host": "ocean.shuqireader.com",
    "User-Agent": "shuqifast/1.0.4 (iPhone; iOS 14.3; Scale/3.00)",
    "Content-Length": "735",
    "Accept-Language": "zh-Hans-CN;q=1"
};
         const body = "actId=355&miniWua=HHnB_975MqAHG%2Bz%2B92Cd3c/maZ8L4Or09y15qJFUXUqM5cVtGEi1pXeZCIjv92xeAQ3R3V%2B4ZsYqsHqomnJtagfxgZGZOYg0X8Ct6gm/ewyiKReKQRZy%2BvS9TIjV2iCmHgjwVn%2B%2BcnPWxNV7NidUgWWhvMQ%3D%3D&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&timestamp=1633389615&userId=2038268844&wua=ktgi_fmTqfoOn0uJRRkZtmOHupMkUnDo%2Blxv7ik1OoBzzwpy/Iz3FIKTn5vCLCqmn7dLs1RBz5fh2H6uKMNthFZaLP/RcA%2Bq0DE6odum9eihWl8BLdU2OEJSoJ5xTCL/bAadLjyK%2B1w9RE5t6fn6Z185ski1g1pSd0GmfyjHiTAxs2JratPrbZOn3ADnD10Od/Tma%2BdDBCbtdVT1CZIxvEXo5GhBKVmFcxz/8xwsD6NlZpjoWi/R3hfHCiYGGCLfhETFBX1RCv0yXjT6G6yvPOkayp75c7qy5Cm7/5TBJJdARi5cbl3hN8HQqRVlZqO5RyGFYosCrZILWIRFVubDlmjW/HFA%2BiC9G1cd5aqEZZLQmVwhq8RdcrOZLUxc6xs5GqpzOrSQXx3Y6/bcsy7yeS9mr4g%3D%3D";
        const request = {
            url: url,
            headers: headers,
            body: body
        };

        $.post(request, async(error, response, data) => {
            try {
                $.log(data);
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}
  

  








function read() {
    return new Promise((resolve, reject) => {
        const url = "https://ocean.shuqireader.com/api/ad/v1/api/prize/readpage/pendant/lottery";
        const headers = {
            "Accept-Encoding": "gzip, deflate, br",
            "Cookie": "isg=BDIyVn-9h1VRsrtp7nV3yEDjiXwUwzZdhviC__wLa-Xtj_aJ5FO0byale60z5K71; cna=DrCfGa6NT3ACAatTLPVy9s0J",
            "Connection": "keep-alive",
            "Content-Type": "application/x-www-form-urlencoded",
            "Accept": "*/*",
            "Host": "ocean.shuqireader.com",
            "User-Agent": "shuqireader/4.3.0 (iPhone; iOS 14.6; Scale/3.00)",
            "Accept-Language": "zh-Hans-US;q=1, zh-Hant-HK;q=0.9, hi-US;q=0.8, en-US;q=0.7"
        };
        const body = "_public=skinId%3D999%26idfa%3D00000000-0000-0000-0000-000000000000%26ustatus%3D1%26first_placeid%3D111111%26net_env%3Dwifi%26umidtoken%3DXblVsgqHUiwDAN7BcQnm2A/p%26user_id%3D2916901745%26sn%3D9FFC2945934B0127160C769D23FE8D9606CB0FAE%26placeid%3D111111%26msv%3D8.0.0%26brand%3DApple%26imei%3D6C18AFFD2562CD50D015EC289ED2FCAFD6142AF5%26skinVersionPrefix%3D1%26appVer%3D4.3.0.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyOTE2OTAxNzQ1IiwidXRkaWQiOiIiLCJpbWVpIjoiNkMxOEFGRkQyNTYyQ0Q1MEQwMTVFQzI4OUVEMkZDQUZENjE0MkFGNSIsInNuIjoiOUZGQzI5NDU5MzRCMDEyNzE2MEM3NjlEMjNGRThEOTYwNkNCMEZBRSIsImV4cCI6MTYyOTUzMDkxMCwidXNlcklkIjoiMjkxNjkwMTc0NSIsImlhdCI6MTYyOTAxMjUxMCwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.XflxZv-XcfSRCM8xOPe9cTov51UPtAsEGN8uNnu59Gl-GykDa9PiD6hLSmBft0gUKXmJZ-jUuql5wFtceuB8zw%26skinColor%3D23B383%26platform%3DiOS%26ver%3D210107%26mod%3DiPhoneXS%26statusBarHeight%3D44.000000%26skinVersion%3D1%26wh%3D1125x2436%26soft_id%3D21%26utdid%3DXblVsgqHUiwDAN7BcQnm2A/p%26utype%3Dvip%26sdk%3D14.6&deliveryId=707&key=sq_app_ad&miniWua=HHnB_U3vcrUclZBGI8xgdUJ8toyc%2Bcu3V7L6584b4LJIqAo9rKD4xOidudtaDEkcZkA34sDtTnXBwQcsP06dfIT%2BwJny1aqZ4O0U9X4YOywUGltpZN1pnlmCAZT/aayksQ%2BsR&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=678&sign=D68E7080F23E0123C177D2F090C22836&timestamp=1629014445&userId=2916901745&wua=HIVW_5GYaKaLjxLSXInwlxv92LU3UYSySyk5Zb1vIqiSKppZ3k/5ybmHegQJtI6SFnGMca6CRW8KEDuZTBpJG3oWo9wQTHmeBIvTt1/3VesMgxwl/6ump9ia7jvKwqSpZjY7Hq5JON%2Bzk/QhpAfitngKoSxhPKHLDAzpbRZTU06Vs7egZTirraGpMjB9685eeUXqfQt%2BAo%2BaRqFym8u40CdVOPOALEMLGQGGCmQFS9VolpMGFfhS4Iw4vELFzXblrumStKtxJZPnJw7EJ7px/sw9POkjSsxGRc2IEwjcocqaYJ2ueMxvhZzim/Cvk8v2wOFKbIewXvqnvtCG/mnPdf8grdg%3D%3D";
        const request = {
            url: url,
            headers: headers,
            body: body
        };

        $.post(request, async (error, response, data) => {
            try {
                $.log(data);
                const result = JSON.parse(data)
                if (result.status == 200) {

                    if (result.data.chanceCurrentCnt < result.data.chanceMaxCnt) {
                        await read();
                        await $.wait(500);
                    }
                }
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}


function timeupload() {
    return new Promise((resolve, reject) => {
        const url = "https://jcollection.shuqireader.com/collection/iosapi/reading/upload";
        const headers = {
            "Accept-Encoding": "gzip, deflate, br",
            "Cookie": "isg=BBgYkueLzeNc6OFnwPftXvbB40KqAXyLn_CVz1IJV9MG7Y7X-hHiGkGHIaNdZjRj; cna=DrCfGa6NT3ACAatTLPVy9s0J",
            "Connection": "keep-alive",
            "Content-Type": "application/x-www-form-urlencoded",
            "Accept": "*/*",
            "Host": "jcollection.shuqireader.com",
            "User-Agent": "shuqireader/4.3.0 (iPhone; iOS 14.6; Scale/3.00)",
            "Accept-Language": "zh-Hans-US;q=1, zh-Hant-HK;q=0.9, hi-US;q=0.8, en-US;q=0.7"
        };
        const body = "_public=skinId%253D999%2526idfa%253D00000000-0000-0000-0000-000000000000%2526ustatus%253D1%2526first_placeid%253D111111%2526net_env%253Dwifi%2526umidtoken%253DbCxLedRLOls1JDV7SC1arg%252BRtgLyo21t%2526user_id%253D2916901745%2526sn%253D9FFC2945934B0127160C769D23FE8D9606CB0FAE%2526placeid%253D111111%2526msv%253D8.0.0%2526brand%253DApple%2526imei%253D6C18AFFD2562CD50D015EC289ED2FCAFD6142AF5%2526skinVersionPrefix%253D1%2526appVer%253D4.3.0.0%2526skinActiveColor%253D0F9970%2526manufacturer%253DApple%2526session%253DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyOTE2OTAxNzQ1IiwidXRkaWQiOiIiLCJpbWVpIjoiNkMxOEFGRkQyNTYyQ0Q1MEQwMTVFQzI4OUVEMkZDQUZENjE0MkFGNSIsInNuIjoiOUZGQzI5NDU5MzRCMDEyNzE2MEM3NjlEMjNGRThEOTYwNkNCMEZBRSIsImV4cCI6MTYyOTUzNDc2MiwidXNlcklkIjoiMjkxNjkwMTc0NSIsImlhdCI6MTYyOTAxNjM2Miwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.pQFbLw8WrDYjlNnOeO7kfBHqW7-LZyZjZ-Mwk03SWaYrfQ2QspcF26DKI4wsmDChqyHv3SJ_GxVlhObZu1Yvsw%2526skinColor%253D23B383%2526platform%253DiOS%2526ver%253D210107%2526mod%253DiPhoneXS%2526statusBarHeight%253D44.000000%2526skinVersion%253D1%2526wh%253D1125x2436%2526soft_id%253D21%2526utdid%253DXblVsgqHUiwDAN7BcQnm2A%252Fp%2526utype%253Dvip%2526sdk%253D14.6&key=and_log&readingList=%5B%7B%22startTime%22%3A1629016791%2C%22readObjType%22%3A1%2C%22attr%22%3A2%2C%22readObjId%22%3A%227370011%22%2C%22readChapterId%22%3A938736%2C%22readingLen%22%3A6%7D%5D&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&sign=67E3DB2C6F946BEF9D018989F4B3AEFC&timestamp=1629016797&user_id=2916901745";
        const request = {
            url: url,
            headers: headers,
            body: body
        };

        $.post(request, async (error, response, data) => {
            try {
                $.log(data);
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}


function jsshare() {
    return new Promise((resolve, reject) => {
        const url = "https://ocean.shuqireader.com/api/activity/v1/task/reward";
        const headers = {
            "Origin": "https://render-web.shuqireader.com",
            "Accept-Encoding": "gzip, deflate, br",
            "Connection": "keep-alive",
            "Content-Type": "application/x-www-form-urlencoded",
            "Accept": "application/json, text/plain, */*",
            "Host": "ocean.shuqireader.com",
            "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 AliApp(shuqi/1.0.5.0) WindVane/8.6.1 Shuqi-Lite (iPhone11,2__shuqi__v1.0.5.0) 1125x2436 Winding(WV_2) WK",
            "Referer": "https://render-web.shuqireader.com/render/lite-welfare/page/golden_house/?from=ShuqiTab&serviceWorkerOn=1&stopPullRefresh=1&sdk=14.6&ustatus=1&umidtoken=CJFLLxhLOp%2Bu3zV7QyKs806Y%2BvW9YrOA&net_env=wifi&placeid=111111&user_id=2916901745&sn=E92DD36C442DA62AA22EF6B3333F044F331EA5AC&msv=10.0.0&brand=Apple&imei=F4272D0D67994A9AD162B30B05698204BD8445A3&appVer=1.0.5.0&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyOTE2OTAxNzQ1IiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF9GNDI3MkQwRDY3OTk0QTlBRDE2MkIzMEIwNTY5ODIwNEJEODQ0NUEzIiwic24iOiJmYXN0X0U5MkREMzZDNDQyREE2MkFBMjJFRjZCMzMzM0YwNDRGMzMxRUE1QUMiLCJleHAiOjE2MjkwMDEzODcsInVzZXJJZCI6IjI5MTY5MDE3NDUiLCJpYXQiOjE2Mjg0ODI5ODcsIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9.Tm6DmTEVrc_PNRMR-fMouAqqdm9DBIJi_hYurOOaDHZJg2Qxm81N9PxKWggtzrwgkSPgoOJhBxehhLKFFvCMBg&statusBarHeight=44.000000&platform=116&ver=210331&mod=iPhoneXS&wh=1125x2436&utype=vip&utdid=YAzuwNlmZUMDAP8Knq70D7M9&idfa=00000000-0000-0000-0000-000000000000",
            "Content-Length": "1802",
            "Accept-Language": "zh-cn"
        };
        const body = "actTaskId=327&wua=ktgi_3Tz5Q%2FQuk9FImWbBSzUm%2FN%2Bk4wjoUc%2B%2Bg1Aj6lUFVL4lg3uSd%2FFuCjVsuYudoADGIvP9utkK8wQV%2BSY%2FQypkIEXr8KOinM0h8%2BeI2NF8dXcFW0t5WNRr1YiNpqryTfNciZIeB4IJ3KjlIMxZo7eKxxIbJcAkJ3k6bIiLp0cknSAZrNfPzAOkdHsAojTkuy2LdZKlH2A%2FDactl2%2FpOAJ%2BGNKuJ9rpztz9vudqBp%2FRntPQGQtY3D8iXwr8hf2wAQLUPDq6JiL61j1hOpkWTNlVMnxPvdUN%2Fe342gejaSHVv5zf8cb9Nwn5kyeWB24%2FCSL1b%2Bc8sX%2FUJMphr1cVo%2BQkqA%3D%3D&ua=&miniWua=HHnB_7DYrUuJn7%2BnkozmoMtJTDJ9slmM%2BjM1PYHVyaLHA7ICaKM0PxVvZBwHm7AMjlluCye8qqlxYykLPLjpzWyFR3%2BvBeJc3%2BcAY%2BMqUnpglCzESxBZZ0QEXM0ikiHUP3cuv&userId=2916901745&umidtoken=CJFLLxhLOp%2Bu3zV7QyKs806Y%2BvW9YrOA&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&platform=116&appVer=1.0.5.0&placeId=111111&timestamp=1629016036&sqSv=1.0&sign=5c6651e003dcf4d7104c01a870581bce&key=sq_h5_gateway&_public=from%3DShuqiTab%26serviceWorkerOn%3D1%26stopPullRefresh%3D1%26sdk%3D14.6%26ustatus%3D1%26umidtoken%3DCJFLLxhLOp%252Bu3zV7QyKs806Y%252BvW9YrOA%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2916901745%26sn%3DE92DD36C442DA62AA22EF6B3333F044F331EA5AC%26msv%3D10.0.0%26brand%3DApple%26imei%3DF4272D0D67994A9AD162B30B05698204BD8445A3%26appVer%3D1.0.5.0%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyOTE2OTAxNzQ1IiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF9GNDI3MkQwRDY3OTk0QTlBRDE2MkIzMEIwNTY5ODIwNEJEODQ0NUEzIiwic24iOiJmYXN0X0U5MkREMzZDNDQyREE2MkFBMjJFRjZCMzMzM0YwNDRGMzMxRUE1QUMiLCJleHAiOjE2MjkwMDEzODcsInVzZXJJZCI6IjI5MTY5MDE3NDUiLCJpYXQiOjE2Mjg0ODI5ODcsIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9.Tm6DmTEVrc_PNRMR-fMouAqqdm9DBIJi_hYurOOaDHZJg2Qxm81N9PxKWggtzrwgkSPgoOJhBxehhLKFFvCMBg%26statusBarHeight%3D44.000000%26platform%3D116%26ver%3D210331%26mod%3DiPhoneXS%26wh%3D1125x2436%26utype%3Dvip%26utdid%3DYAzuwNlmZUMDAP8Knq70D7M9%26idfa%3D00000000-0000-0000-0000-000000000000";
        const request = {
            url: url,
            headers: headers,
            body: body
        };

        $.post(request, async (error, response, data) => {
            try {
                $.log(data);
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}



function jsshucheng() {
    return new Promise((resolve, reject) => {
         const url = "http://activity-center-web.shuqireader.com/v1/task/reward?sdk=14.3&ustatus=1&umidtoken=xqxLWbJLOhVQ1zV8b2nD9uHcXrAs5NFN&net_env=wifi&placeid=111111&user_id=2063328969&sn=EB557BF550DDDB0F42451F5641E634E01CDFE75E&msv=10.0.0&brand=Apple&imei=718BABBFD306E93F02574358B53E9AEF98E32121&appVer=1.0.5.0&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDYzMzI4OTY5IiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF83MThCQUJCRkQzMDZFOTNGMDI1NzQzNThCNTNFOUFFRjk4RTMyMTIxIiwic24iOiJmYXN0X0VCNTU3QkY1NTBERERCMEY0MjQ1MUY1NjQxRTYzNEUwMUNERkU3NUUiLCJleHAiOjE2MzQ0NzQ1MTIsInVzZXJJZCI6IjIwNjMzMjg5NjkiLCJpYXQiOjE2MzM5NTYxMTIsIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9.0ikOh3_OWeus-vdKB2Fwtj8wwCNQa87dDl3_AxtgSG_Gj2PCUAbIbAmGqEYteuGtVGcy895E2vdGhVDWcMZkSQ&statusBarHeight=20.000000&platform=116&ver=210331&mod=iPhone6splus&wh=1242x2208&utype=vip&utdid=YRjKkqmnuBoDABOa54Af002O&idfa=11A1346C-AA3A-456B-B89B-ED8E1A043AE1";
         const headers = {
    "Cookie": "cna=Om3oGSPWbiECAXjQsjNsJY+G",
    "Accept": "*/*",
    "Connection": "close",
    "Content-Type": "application/x-www-form-urlencoded",
    "Accept-Encoding": "gzip, deflate",
    "Host": "activity-center-web.shuqireader.com",
    "User-Agent": "shuqifast/1.0.5 (iPhone; iOS 14.3; Scale/3.00)",
    "Content-Length": "100",
    "Accept-Language": "zh-Hans-CN;q=1"
};
         const body = "actTaskId=344&platform=116&reqEncryptParam=%3A&reqEncryptType=-1&resEncryptType=-1&userId=2063328969";
        const request = {
            url: url,
            headers: headers,
            body: body
        };

        $.post(request, async(error, response, data) => {
            try {
                $.log(data);
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}
  




  

function jsread105() {
    return new Promise((resolve, reject) => {
         const url = "http://activity-center-web.shuqireader.com/v1/activity/pendant/lottery?sdk=14.3&ustatus=1&umidtoken=xqxLWbJLOhVQ1zV8b2nD9uHcXrAs5NFN&net_env=wifi&placeid=111111&user_id=2063328969&sn=EB557BF550DDDB0F42451F5641E634E01CDFE75E&msv=10.0.0&brand=Apple&imei=718BABBFD306E93F02574358B53E9AEF98E32121&appVer=1.0.5.0&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDYzMzI4OTY5IiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF83MThCQUJCRkQzMDZFOTNGMDI1NzQzNThCNTNFOUFFRjk4RTMyMTIxIiwic24iOiJmYXN0X0VCNTU3QkY1NTBERERCMEY0MjQ1MUY1NjQxRTYzNEUwMUNERkU3NUUiLCJleHAiOjE2MzQ0NzQ1MTIsInVzZXJJZCI6IjIwNjMzMjg5NjkiLCJpYXQiOjE2MzM5NTYxMTIsIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9.0ikOh3_OWeus-vdKB2Fwtj8wwCNQa87dDl3_AxtgSG_Gj2PCUAbIbAmGqEYteuGtVGcy895E2vdGhVDWcMZkSQ&statusBarHeight=20.000000&platform=116&ver=210331&mod=iPhone6splus&wh=1242x2208&utype=vip&utdid=YRjKkqmnuBoDABOa54Af002O&idfa=11A1346C-AA3A-456B-B89B-ED8E1A043AE1";
         const headers = {
    "Cookie": "cna=Om3oGSPWbiECAXjQsjNsJY+G",
    "Accept": "*/*",
    "Connection": "close",
    "Content-Type": "application/x-www-form-urlencoded",
    "Accept-Encoding": "gzip, deflate",
    "Host": "activity-center-web.shuqireader.com",
    "User-Agent": "shuqifast/1.0.5 (iPhone; iOS 14.3; Scale/3.00)",
    "Content-Length": "651",
    "Accept-Language": "zh-Hans-CN;q=1"
};
         const body = "actId=355&miniWua=HHnB_tJFiUpqyNwhoHFWhO2u092ztfHLJTuGhwOXnYbYprIxFzBvc22mvG1wF21xhRjtt9DLe5RttJrBypF6jzMezCahlSduginJ6ZQdTiQCE/dJ6jsgL8Pwe6hLMAVPT9InW&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&timestamp=1633991141&userId=2063328969&wua=ktgi_mWfdquURMU2%2BcMjdu2rbFdaSBhYaTpUH03PfRfy1Hh62QCjwyNCW6sZL5AqMCsKT9IToXNIU4DPSUWVvOJJ8cXc1r6OnNWC8XtagbrWLGnbHnHdfLs7LfmfViMjYFDFbyNGZFJ2LbrP24emuzCDuFRl4OOBqp%2BRpQjNZsCHGO7YUlQs2nmAAiSvvAuCxDi03XrbWjwVMZhfV%2B9nT2ILuag/sCBg09iHGIfPo8YSOrpcAyIRn6wS8pfNh1Bbt8XpN%2B/w2MDsAXGf8tJ/4wjBmuXqJPQ5KeFhTjSfuCMeqvUYJ/HScRhO%2BanXWHRNgZVR3cilbt1mF7bTZj019NXBeTZhv%2Bj2ELFln2SanwpFpkhA%3D";
        const request = {
            url: url,
            headers: headers,
            body: body
        };

        $.post(request, async(error, response, data) => {
            try {
                $.log(data);
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}
  

  





function jsvedioreward10() {
    return new Promise((resolve, reject) => {
        const url = "https://ocean.shuqireader.com/api/ad/v1/api/prize/lottery";
        const headers = {
            "Accept-Encoding": "gzip, deflate, br",
            "Cookie": "isg=BMHBbsFARAgBa6gqAIVl62-Y2gnb7jXga-9oWCMW0EiKCsXcaz76sNhA6PhMGc0Y; cna=BXqeGVTd73sCAatTLPUxYOJB",
            "Connection": "keep-alive",
            "Content-Type": "application/x-www-form-urlencoded",
            "Accept": "*/*",
            "Host": "ocean.shuqireader.com",
            "User-Agent": "shuqifast/1.0.5 (iPhone; iOS 14.6; Scale/3.00)",
            "Accept-Language": "zh-Hans-US;q=1, zh-Hant-HK;q=0.9, hi-US;q=0.8, en-US;q=0.7"
        };
        const body = "_public=idfa%3D00000000-0000-0000-0000-000000000000%26ustatus%3D1%26net_env%3Dwifi%26umidtoken%3DCJFLLxhLOp%2Bu3zV7QyKs806Y%2BvW9YrOA%26placeid%3D111111%26user_id%3D2916901745%26sn%3DE92DD36C442DA62AA22EF6B3333F044F331EA5AC%26msv%3D10.0.0%26brand%3DApple%26imei%3DF4272D0D67994A9AD162B30B05698204BD8445A3%26appVer%3D1.0.5.0%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyOTE2OTAxNzQ1IiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF9GNDI3MkQwRDY3OTk0QTlBRDE2MkIzMEIwNTY5ODIwNEJEODQ0NUEzIiwic24iOiJmYXN0X0U5MkREMzZDNDQyREE2MkFBMjJFRjZCMzMzM0YwNDRGMzMxRUE1QUMiLCJleHAiOjE2MjkwMDEzODcsInVzZXJJZCI6IjI5MTY5MDE3NDUiLCJpYXQiOjE2Mjg0ODI5ODcsIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9.Tm6DmTEVrc_PNRMR-fMouAqqdm9DBIJi_hYurOOaDHZJg2Qxm81N9PxKWggtzrwgkSPgoOJhBxehhLKFFvCMBg%26statusBarHeight%3D44.000000%26platform%3D116%26ver%3D210331%26mod%3DiPhoneXS%26wh%3D1125x2436%26utype%3Dvip%26utdid%3DYAzuwNlmZUMDAP8Knq70D7M9%26sdk%3D14.6&deliveryId=897&key=sq_app_ad&miniWua=HHnB_3SMWpVcrf%2BGigHsqHAbaMwFZjmFYm/nSWDLJ5MCjNLvVFtYMwQJEaFFm5sFGqFQ0hCqOXKk1d1MBbmEzQRNjNAGg/HPQe%2B6SZQCZa%2BgRylsfQ7NHm//jwtWr%2BOe89EbQ&platform=116&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=719&sign=A1C6AC2353277A8E0CD35370A39ADDC8&timestamp=1629015720&userId=2916901745&user_id=2916901745&wua=ktgi_KWcfFAwrcl4kSYsk%2BqAf/XvZ/3UoOoaWSR4pkDOU%2BdxQ06K5q11k4BjdoLwZrrwIoEXsz66a/JsDq8xM%2Bgr2YNlBWtoiubDDvcF2Y//B0d9uYQ7ATL88qSRS46doPR8iY7rBdy6084VMi5wrcgNAocBn%2BAJCaKjZASokU4TZf5WgBWpdN/0ln4keyqPUnrOPOUDPWqxXO2lBuVr0BkGEBrGhBBWDrFw945P93o62quEBP/nvJLLX8/6g9kQHOIQLh1FWqxgUGfXYgQrQ/3en%2B9mDDgySVVXu48iTcTAg93zZ03Nz3/KdAP1/nUcR6b4O";
        const request = {
            url: url,
            headers: headers,
            body: body
        };

        $.post(request, async (error, response, data) => {
            try {
                $.log(data);
                const result = JSON.parse(data)
                if (result.status == 200) {

                    if (result.data.chanceCurrentCnt < result.data.chanceMaxCnt) {
                        await jsvedioreward10();
                        await $.wait(500);
                    }
                }
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}


function jsvedioreward20() {
    return new Promise((resolve, reject) => {
        const url = "https://ocean.shuqireader.com/api/ad/v1/api/prize/lottery";
        const headers = {
            "Accept-Encoding": "gzip, deflate, br",
            "Cookie": "isg=BGVlQ4WMaHwfsIy2RLnZ3-MMfiWfohk0V9tMJGdKLxyNfojwL_LUBu9cDGQI5THs; cna=BXqeGVTd73sCAatTLPUxYOJB",
            "Connection": "keep-alive",
            "Content-Type": "application/x-www-form-urlencoded",
            "Accept": "*/*",
            "Host": "ocean.shuqireader.com",
            "User-Agent": "shuqifast/1.0.5 (iPhone; iOS 14.6; Scale/3.00)",
            "Accept-Language": "zh-Hans-US;q=1, zh-Hant-HK;q=0.9, hi-US;q=0.8, en-US;q=0.7"
        };
        const body = "_public=idfa%3D00000000-0000-0000-0000-000000000000%26ustatus%3D1%26net_env%3Dwifi%26umidtoken%3DCJFLLxhLOp%2Bu3zV7QyKs806Y%2BvW9YrOA%26placeid%3D111111%26user_id%3D2916901745%26sn%3DE92DD36C442DA62AA22EF6B3333F044F331EA5AC%26msv%3D10.0.0%26brand%3DApple%26imei%3DF4272D0D67994A9AD162B30B05698204BD8445A3%26appVer%3D1.0.5.0%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyOTE2OTAxNzQ1IiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF9GNDI3MkQwRDY3OTk0QTlBRDE2MkIzMEIwNTY5ODIwNEJEODQ0NUEzIiwic24iOiJmYXN0X0U5MkREMzZDNDQyREE2MkFBMjJFRjZCMzMzM0YwNDRGMzMxRUE1QUMiLCJleHAiOjE2MjkwMDEzODcsInVzZXJJZCI6IjI5MTY5MDE3NDUiLCJpYXQiOjE2Mjg0ODI5ODcsIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9.Tm6DmTEVrc_PNRMR-fMouAqqdm9DBIJi_hYurOOaDHZJg2Qxm81N9PxKWggtzrwgkSPgoOJhBxehhLKFFvCMBg%26statusBarHeight%3D44.000000%26platform%3D116%26ver%3D210331%26mod%3DiPhoneXS%26wh%3D1125x2436%26utype%3Dvip%26utdid%3DYAzuwNlmZUMDAP8Knq70D7M9%26sdk%3D14.6&deliveryId=980&key=sq_app_ad&miniWua=HHnB_%2BNXh03V1/aLva2aESnRsb3Vid9f3uBac5KaDmUx%2BeF4aO8r%2BPK%2BdtIDQRNlAiX9%2BBzgBl4kySlkbugT19uUSqowDQD76xTiKbyQKaO4obKaLgr18733BJewaxPOMO905&platform=116&reqEncryptParam=%3A&reqEncryptType=-1&requestSrc=shuqi&resEncryptType=-1&resourceId=717&sign=CE4FF05F51CF37FE111372001FDFCA39&timestamp=1629015259&userId=2916901745&user_id=2916901745&wua=ktgi_T5TSslcG8S40FfQ7ghBeeMC00V1KvqIp3gVIa4J/GYX9idgk6SrlViY7Odxg/clKzJwVYES6U77CB3B1Ml5OX%2Bei%2Bd0Af1k4zhg64iDJt5Jt0j8pCFz3AY94ki%2B%2BHnmSyR4a2Kd/RfCQXKhf7FSmTiB5vAHhPrb3aSL7vRoiX3EpPgU96iMXDIx0V9NW1PtH0YPwoRFOiYR4BQPEBq6qsOFbJ7TRkFti4RCqJs9uQr4y8MRtC%2BG85cCrnouExTP6mcVVftnplrkTTJYQwIS5CnV4uZilnd949q8be2eXJ1MzsyYBCpKbb7PW3il1df6j";
        const request = {
            url: url,
            headers: headers,
            body: body
        };

        $.post(request, async (error, response, data) => {
            try {
                $.log(data);
                const result = JSON.parse(data)
                if (result.status == 200) {

                    if (result.data.chanceCurrentCnt < result.data.chanceMaxCnt) {
                        await jsvedioreward20();
                        await $.wait(500);
                    }
                }
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}






function jsdailysign() {
    return new Promise((resolve, reject) => {
         const url = "https://ocean.shuqireader.com/api/activity/xapi/signin/v5/signInAction";
         const headers = {
    "Origin": "https://render-web.shuqireader.com",
    "Accept-Encoding": "gzip, deflate, br",
    "Connection": "keep-alive",
    "Content-Type": "application/x-www-form-urlencoded",
    "Accept": "application/json, text/plain, */*",
    "Host": "ocean.shuqireader.com",
    "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 AliApp(shuqi/1.0.5.0) WindVane/8.6.1 Shuqi-Lite (iPhone8,2__shuqi__v1.0.5.0) 1242x2208 Winding(WV_2) WK",
    "Referer": "https://render-web.shuqireader.com/render/lite-welfare/page/golden_house/?from=ShuqiTab&serviceWorkerOn=1&stopPullRefresh=1&sdk=14.3&ustatus=1&umidtoken=xqxLWbJLOhVQ1zV8b2nD9uHcXrAs5NFN&net_env=wifi&placeid=111111&user_id=2063328969&sn=EB557BF550DDDB0F42451F5641E634E01CDFE75E&msv=10.0.0&brand=Apple&imei=718BABBFD306E93F02574358B53E9AEF98E32121&appVer=1.0.5.0&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDYzMzI4OTY5IiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF83MThCQUJCRkQzMDZFOTNGMDI1NzQzNThCNTNFOUFFRjk4RTMyMTIxIiwic24iOiJmYXN0X0VCNTU3QkY1NTBERERCMEY0MjQ1MUY1NjQxRTYzNEUwMUNERkU3NUUiLCJleHAiOjE2MzQ0NzQ1MTIsInVzZXJJZCI6IjIwNjMzMjg5NjkiLCJpYXQiOjE2MzM5NTYxMTIsIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9.0ikOh3_OWeus-vdKB2Fwtj8wwCNQa87dDl3_AxtgSG_Gj2PCUAbIbAmGqEYteuGtVGcy895E2vdGhVDWcMZkSQ&statusBarHeight=20.000000&platform=116&ver=210331&mod=iPhone6splus&wh=1242x2208&utype=vip&utdid=YRjKkqmnuBoDABOa54Af002O&idfa=11A1346C-AA3A-456B-B89B-ED8E1A043AE1",
    "Content-Length": "1825",
    "Accept-Language": "zh-cn"
};
         const body = "clientTimestamp=1633991500&position=601&signInType=1&wua=ktgi_WlAyIrAQjnUPOhPDDvXAcx43zlks42vNguY5cYlW6MgFiTYQi7Cl8ZFeleltyqAPQaFjx5Hx%2BHaNNls2BmuYzuAjJOhriPwqg7HD7eirmls1R7aPfcmGm3u9s%2BZXjKIXaIo0dYetWF9%2Fdus%2BNBepfvToTxPsZ1lZ8pViU4jABlUjkq7%2BTsfkLEtFdnpp0W%2FUG4du9AT7P%2BLcV1R7L4%2FIUcyGxK2DZryR28TRWiS3yw2%2BFPGIsjpwsZczX3E3SLpEiHORsuUiwAdry%2F8x2byy7j5bbQff8VvmoPeIDN7R1Q%2FpCEloxeIdhaxvUOcOhVbLdGlkGsYRS3EtaoPojwDeaVIt0zyQhgmceQuXeJ5B96s%3D&miniWua=HHnB_aUHmfhbTVcfBZ0eF5XLSjNFGSL4HheBIEjKc2GpjaTqseK1JO668aUHbKu5DM6vtGxq9BFgnj9kdaskGqRr66dccDFsHEBATs9kcw0at0bNR50tmDOYeJGoPAHiK%2Fzai&userId=2063328969&umidtoken=xqxLWbJLOhVQ1zV8b2nD9uHcXrAs5NFN&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&platform=116&appVer=1.0.5.0&placeId=111111&timestamp=1633991500&sqSv=1.0&sign=4e4b2b4fc0626b9b7e34abcebbde6426&key=sq_h5_gateway&_public=from%3DShuqiTab%26serviceWorkerOn%3D1%26stopPullRefresh%3D1%26sdk%3D14.3%26ustatus%3D1%26umidtoken%3DxqxLWbJLOhVQ1zV8b2nD9uHcXrAs5NFN%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2063328969%26sn%3DEB557BF550DDDB0F42451F5641E634E01CDFE75E%26msv%3D10.0.0%26brand%3DApple%26imei%3D718BABBFD306E93F02574358B53E9AEF98E32121%26appVer%3D1.0.5.0%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDYzMzI4OTY5IiwidXRkaWQiOiIiLCJpbWVpIjoiZmFzdF83MThCQUJCRkQzMDZFOTNGMDI1NzQzNThCNTNFOUFFRjk4RTMyMTIxIiwic24iOiJmYXN0X0VCNTU3QkY1NTBERERCMEY0MjQ1MUY1NjQxRTYzNEUwMUNERkU3NUUiLCJleHAiOjE2MzQ0NzQ1MTIsInVzZXJJZCI6IjIwNjMzMjg5NjkiLCJpYXQiOjE2MzM5NTYxMTIsIm9haWQiOiIiLCJwbGF0Zm9ybSI6IjExNiJ9.0ikOh3_OWeus-vdKB2Fwtj8wwCNQa87dDl3_AxtgSG_Gj2PCUAbIbAmGqEYteuGtVGcy895E2vdGhVDWcMZkSQ%26statusBarHeight%3D20.000000%26platform%3D116%26ver%3D210331%26mod%3DiPhone6splus%26wh%3D1242x2208%26utype%3Dvip%26utdid%3DYRjKkqmnuBoDABOa54Af002O%26idfa%3D11A1346C-AA3A-456B-B89B-ED8E1A043AE1";
        const request = {
            url: url,
            headers: headers,
            body: body
        };

        $.post(request, async(error, response, data) => {
            try {
                $.log(data);
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}
  






function dailysign421() {
    return new Promise((resolve, reject) => {
         const url = "https://ocean.shuqireader.com/api/activity/xapi/signin/v5/info";
         const headers = {
    "Origin": "https://render-web.shuqireader.com",
    "Accept-Encoding": "gzip, deflate, br",
    "Connection": "keep-alive",
    "Content-Type": "application/x-www-form-urlencoded",
    "Accept": "application/json, text/plain, */*",
    "Host": "ocean.shuqireader.com",
    "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 AliApp(shuqi/4.2.10.0) WindVane/8.6.1 Shuqi (iPhone8,2__shuqi__v4.2.10.0) 1242x2208 Winding(WV_2) WK",
    "Referer": "https://render-web.shuqireader.com/render/sq-welfare/page/welfare_page_v2/?serviceWorkerOn=1&stopPullRefresh=1&from=ShuqiTab&upf=20363&sdk=14.3&utdid=YRPHOvDewScDALPRGBH3kbX0&ustatus=1&first_placeid=111111&net_env=wifi&placeid=111111&user_id=2063328969&sn=08F7FE3B83E32D8F65DCECCBE4629C63178A61CF&umidtoken=0pFLv0pLOu%2B%2BQTV8brseBSwOB7q%2FpWTT&msv=8.0.0&brand=Apple&imei=59AF196F729EC9BBEE11F988A182A7CE8CB76B9E&skinVersionPrefix=1&appVer=4.2.10.0&skinActiveColor=0F9970&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDYzMzI4OTY5IiwidXRkaWQiOiIiLCJpbWVpIjoiNTlBRjE5NkY3MjlFQzlCQkVFMTFGOTg4QTE4MkE3Q0U4Q0I3NkI5RSIsInNuIjoiMDhGN0ZFM0I4M0UzMkQ4RjY1RENFQ0NCRTQ2MjlDNjMxNzhBNjFDRiIsImV4cCI6MTYzNDQ1MjQ5NiwidXNlcklkIjoiMjA2MzMyODk2OSIsImlhdCI6MTYzMzkzNDA5Niwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0._Ra3BgFvI3zwGd6GLvKEYKXfpFTRV_Jh100FWmiLKu_rUYx3bjR-25DuDAaNon1sdhm13RCjNYyFF-Hr-iqL1Q&skinColor=23B383&platform=iOS&ver=201218&mod=iPhone6splus&statusBarHeight=20.000000&skinVersion=1&wh=1242x2208&soft_id=21&utype=vip&skinId=999&idfa=11A1346C-AA3A-456B-B89B-ED8E1A043AE1",
    "Content-Length": "1325",
    "Accept-Language": "zh-cn"
};
         const body = "clientTimestamp=1633934174&position=501&userId=2063328969&platform=1&appVer=4.2.10.0&placeId=111111&timestamp=1633934174&sqSv=1.0&sign=832aa59ecf8c354ab4b896bda8e86027&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26stopPullRefresh%3D1%26from%3DShuqiTab%26upf%3D20363%26sdk%3D14.3%26utdid%3DYRPHOvDewScDALPRGBH3kbX0%26ustatus%3D1%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2063328969%26sn%3D08F7FE3B83E32D8F65DCECCBE4629C63178A61CF%26umidtoken%3D0pFLv0pLOu%252B%252BQTV8brseBSwOB7q%252FpWTT%26msv%3D8.0.0%26brand%3DApple%26imei%3D59AF196F729EC9BBEE11F988A182A7CE8CB76B9E%26skinVersionPrefix%3D1%26appVer%3D4.2.10.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDYzMzI4OTY5IiwidXRkaWQiOiIiLCJpbWVpIjoiNTlBRjE5NkY3MjlFQzlCQkVFMTFGOTg4QTE4MkE3Q0U4Q0I3NkI5RSIsInNuIjoiMDhGN0ZFM0I4M0UzMkQ4RjY1RENFQ0NCRTQ2MjlDNjMxNzhBNjFDRiIsImV4cCI6MTYzNDQ1MjQ5NiwidXNlcklkIjoiMjA2MzMyODk2OSIsImlhdCI6MTYzMzkzNDA5Niwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0._Ra3BgFvI3zwGd6GLvKEYKXfpFTRV_Jh100FWmiLKu_rUYx3bjR-25DuDAaNon1sdhm13RCjNYyFF-Hr-iqL1Q%26skinColor%3D23B383%26platform%3D1%26ver%3D201218%26mod%3DiPhone6splus%26statusBarHeight%3D20.000000%26skinVersion%3D1%26wh%3D1242x2208%26soft_id%3D21%26utype%3Dvip%26skinId%3D999%26idfa%3D11A1346C-AA3A-456B-B89B-ED8E1A043AE1";
        const request = {
            url: url,
            headers: headers,
            body: body
        };

        $.post(request, async(error, response, data) => {
            try {
                $.log(data);
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}
  

  

    
  


function vedioreward421() {
    return new Promise((resolve, reject) => {
         const url = "https://api-access.pangolin-sdk-toutiao.com/api/ad/union/sdk/reward_video/reward/";
         const headers = {
    "Accept": "*/*",
    "Accept-Encoding": "gzip, deflate, br",
    "Connection": "keep-alive",
    "Content-Type": "application/json",
    "Host": "api-access.pangolin-sdk-toutiao.com",
    "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148",
    "Content-Length": "4644",
    "Accept-Language": "zh-Hans-CN;q=1"
};
         const body = "{\"message\":\"2W0ah5czRckZPdhpWORaDQgDLlgXrlLXLWmGFvzj3IeH32mHwndqiFUlQZ5iA+\\/qt1QRL0OKdhr5Z7hsPDSY2tDJg3bBx35z\\/OaGpG4FV+pKoKCxBGiXvgVjUL411k4fIzz\\/jPvqjwGnK15UGguIhRW2xFj\\/5O7+8k1U9uVo\\/VN9ITJiYIsfDWqJplWbS5VWwfXbsLupCoM7iE6mj0P0JwvF9pkb41r19slOJevfKh5wXFCd09vz1f8ch3fuBTKJ+W76+AIuCwjlBkeAhKkBnbhTZp\\/bNVyULNZcZ32JwkiVK7lopAM\\/Y9eiDR0c7ID6lJLwGFwyGpO1DqDud7blRUJmDIaf6OUXb8\\/Piy84ku+9gE\\/rOVYonkZsXDTILY+JU96AMikmkKiXLeFIRwz14UakiGBCNHGNtEWi\\/Fym15kgMrD1VDn87OdrneOUGrhcsTJQ82KAB1ymaz0gDK00egp1b4d2Q59u6travKGWZ0QREibcQHhLr18uDQtmR47xRbQhis72grQ1sk+D0QDn01zDpuf2KAhxG91TpJP7w+3HzSpbUHtBdWG+d+5Psnd1YAWQUqgQp7P586oi+RmL3w1ercwqCPy9iOVxK6HqaMA8UI8oHTjVDjNINIIQr9YrO4Q+K41dkFE47AkK2sf0nN1RfWD9kViueZVmkJBwbg9UZF+Hh9nn2Ijyn953ZWkb3AoX+VGhBkP1lUb1PWEFO8LXGiY320g37GyT4hSRSgUBuqwdnUI4zuDI0McJ\\/DdWdlP9MXu3C9JZSRN\\/JuWH7T0pqpZdvb\\/xkVbvv1Q60nPynJfs5fNapVKACwINifFR4ZAIjIjLEPnacTEdinYL6CHKXjn5xc5jS+OFFAFsPafSbuscljv9ZDs9ZFQ1yvtupLXxjo+2l4DtDRJutev\\/3rXETgp65OVSJ1zcMCTse3ktiPpoFEoXX3JiNRvPwl5yEloz\\/o8V6RsO77QL5OyOy0ZkKhTlQgTqFkqzA5wP6zl58Lcvjqhc+p+1Dn9zYgKT7mfczAybGtvyaxCpqICyPTuYaOQaQRHycvteaODfXBGWHhcpvAivWMbWFpC60buTI0Qa+5YGyidh0r8u5R5CC5St9NFDws3UCO4gqgz23VDiRgrGRhpJtg6clNjVLULZFRogkvU0WZtyu22wDMH6UT6Tagn2Tth1cSzJauMM48OPI57kFsQfzxDFWM5t3uiGc8tvngarqIv98x1B77eu\\/Y3dNfnm6UDVUYLW1X9vztzj2oYJ7W7wDQPSCxQ4yu625TxVyOzLMYriIAq2zp+akPLh0t7IhdnSGTJjw3hCwFNamuxTOluWT1GkiiU69howBLkEqVUF3GYMHRa38A8Rse9a1GvO8FyTiAUJoWIZDsWD6bQyBPe9LxEiwp80dxFpx6+umDMsf6WIjwZoWTASozzlr3RAQ72mZDXesU4aFa\\/dlHfYVRI1ge+uSlVxOq4tkt5HAZ2h2tTUyyAppjSQzfRtEdB3yFwreBaDy4k6X8oTKhDX3wo1+sFVwx2XWlxJtEkPdtJAhQNS5GxPCUue5Iv45CGyxNRvKFG0nXgZBImrSjQFRrO6qB1\\/vbnhejEaOeQcjoIt1NKTlkCYltCat5OFj4J6bx00AF6k4v62VYXVORBtlLu5iIpkXGwdI8c5nZJab1FhbfSSAK8xyKvw5p42tpvpt8TGZU7LbXHAZgA9YZDTWO0G4bXASHi+er0wE4pFaEOCRFSr\\/93X67NDZwzRnAmihakMQIflw7PlEAeUcXRcZI09EswJNeCa0bdnJ4nq3R1\\/PzEjw\\/JdNcd5w8fHdmHlcaeDo3NhF90Lup6pdQ9Fe1mLZ4CHUTNoRVpvOwefI17uswIoguwiV5qv84YHOSw863qcLAkQZN0a\\/cI77XtlKOx0JyIBS7O2oHdi8j32a2ar9w34N7zqIpYZ7JHbMUzBrcyTYClswk6kR++HqD8tLwgxAHS0jFY7YIbNOIO01q92ZN+uBwfYAD7x13b\\/T7\\/ZG76glTO65MI9r\\/CFn557U6pUSwr4Hi22GER\\/UKEufb+ptIjv2yL1KXfzBzDPAwvdKr\\/jARBQvYPB4kOFTB8WWRzb1G00u2+XIsccOVICOHyvKPNF+3mKWx7RI99e4uSFf2IikPJCp9yYPowKramuyLA77Zvx\\/6oVFbGU+LxHgKfme4cpQI7B7XXIl5ifwmUm7fwSF5IT3NZIQA0NOP5nk0ksIq+5ax+eBjTeEqXlhoBfoh+E3qAdcq0ilF12Hai3CbDf5P\\/0MtO3bnm9HBZYIdM\\/OMSHVuiIdU8h3Tcszd7sMr48o9R07IaRQuQnMM1SoTpDMqKKr2vWqfpMK2ZSB7gElRolUf4IP+SiafXgTI0TRnSV6vhFhuRhU8G+rGhr2eIM1F25+66cQhsy31jxhy1kaRg2TUZAsFB3hiipevLA9xIUiGrmBbwKzYF7g+WV2+puqpp29CBYRjkrz3M1B3rYAIM6dWc8QL3kBglLfVgteaAPeJVdxwJbEIhDN1SEtxNgEZot6ggjlEY51i9X0zGFbAjKIU810dgxEVdPTzscl1HQEo7vH7XxChNrWaaQkWKaLS95Ga9HoSfb6nmF+qukg1fo4GKJsZN9U32Y1h5GFN\\/aESrNwy1sr7oGP39AWkNzCjj4C3u7ku0bJyy8VOVjxUElpCnQxhyH2Nwu1hwcRSRHyH5haQWNa8ocIjfw5aF2OTjvQH3x3WarbHWhRnf6yaayCgoZFPmYWjzWuBZVDS2Nbgnj3dAc172WKbYAlz8updNcgUu26RIt82Y+NERIAvKIVVd5sE3kGJ+bLlUH8keYKmF7+MusQXzcpu+i3tioH2aQE6P9S4fINQ9ORWNT1Z6r+jjqqhedvx6gVa7j0FyeaUVIX0ddg6NVx1VnTqnOCS4x41v+\\/2IBXlCFtZKSgKle2jmKPKN\\/ZQrDiqa5jKT0SBp6Dmomn6jGkY5NcYCQJgOm4bzb\\/WOfpXMg3K9\\/lVmY3+gP2hajOBiJiNMDYAH+FMv5gR49pKIF\\/rk3YwyAn684SPDzUn1Y6ZbzXFT9YXRbttcv+S7rrq6LYXfFUJUSEDMf8umWfwL38MAlEdUvQ0tZDS0ksjtfgvH4vL\\/rdLgBgY9pW9wRFSBqcX8tJ64pheWk8gGz7wYk2B+AxDZOCDn\\/NfoJwIk\\/yaaRQiZ5ReHhZY0qMaA90Vn1bLynTbkC4kxWCtfwGtX8HYm5d2y8Zbwzn654goH31JKNHa4oQ8DYM9w1J0Gb\\/I+NoMtVegfNeBQHtFIy000n1OdxqRlAllzxBqNb\\/MDz2tsVYTN1089kWAN84WWCA3EXjLyyJavRnsMlZjkR6BPKBAX9ww\\/7buzNCilmPz+6bzvPly7vFUUrpVcQREefZs9nxCdSJYYfDrJoVUkFopDNHBz8+4Nm1aUXUDerkqWOSxDLOXHpQpNcS\\/fZivTNlHGr\\/FrXjP3jd\\/L92yckhpHfgFkgdlwKRpc6GmxyH2vJIg80fRe2XGeHLmdfiQlObm6gO4txO5W9\\/wACAGrVqneo+VZ3OyciLmY9xx707xLL2FkrgBVdSBcubA9aRaGKQP7\\/eDW6IK1p+d9cDnHJ3xOQ3C7pbrFyt3iAVbQ5Znjf9r254LXTPqGToTktaQ1XHQy6rK4vGqzDoJgvb7mwWK6WYYTNxDUercrOU5kRW5gTYGt06KpmEp8ZPF9qww9vppXT9noGkgzGaxIV8j5m7Qokoi3Scle430GuJYdwX9LvoO25rpWtryWhU62WICU+YrRy4fyuQxOFx+F8l1jDuyxbEc4mXXwTvwRbzhzHo+J516YMfZyRU7Ef6sfc2qLXboyyvxj9+9shLoI23GJK\\/JJnNRG00zaoXGhrxXOIKY2mZLL8A7lD8o\\/KsGfZxxrYijTFLbCwiJoJyWglH5X3\\/SJeGFCEHnuew+3tJCQbli\\/MVDL1d1H+kAbKOWyXWVS9H3ERyUkEc5VtTVHbUDyHKV0MO4MvvieujfB46krw2VH7PNz59hbeVnSLxN2AiuZhNAj91keCfz9E\\/9K2eVhZJXyo73n6+rfY+1ryiC4gI3iDk9XEYyQV8PP80tSaqoEcqtV696vzHLapmGe2nBlc6k2xDkegh5z\\/ovJuJIGVsMVVU8NgGLBgoEUBuq3zlznJaB8RMPrKsQf8p3RIXSkyvBM8gD6JM9A1lDsKhpmVSodO9B7BlTsz2yCKRG5rclrWaAixAN\\/dDyW3ZktcLkkrNfGHnrEbeHzeVB3KBQSc39nuU70NkPDkHBVk9NQeCZHVtjbJJ0UTasOl6lky5EkX21JrzaoIzuULZwtXTz7wzGW44yuSCmhuKS1kyKeFcXoukCEng+3OeuuVHgMdW3hH8dkFlK3lrBjxEeBD0QFGapasQ53bDWwzdqVOfyxS99t\\/72QTwH3VLvGPgOuRwwozusNz\\/xenYr1AwiR2e0SJdUFW6gNT+dVceli4RH6l\\/zTIW7RvBuUiwI\\/o0fwgFcR0s2DAm+3FVTVP6vk+26NMQkIsagTKSkUi1VBvRH1w7F49LgFcTtW9ubJhZ77OP\",\"cypher\":2}";
        const request = {
            url: url,
            headers: headers,
            body: body
        };

        $.post(request, async(error, response, data) => {
            try {
                $.log(data);
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}
  

  

  

    
  




function vediorewarddraw430() {
    return new Promise((resolve, reject) => {
         const url = "https://api-access.pangolin-sdk-toutiao.com/api/ad/union/sdk/reward_video/reward/";
         const headers = {
    "Accept": "*/*",
    "Accept-Encoding": "gzip, deflate, br",
    "Connection": "keep-alive",
    "Content-Type": "application/json",
    "Host": "api-access.pangolin-sdk-toutiao.com",
    "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_4_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148",
    "Content-Length": "4902",
    "Accept-Language": "zh-Hans-CN;q=1"
};
         const body = "{\"message\":\"2q9Xhu9LzFebyDPgGUsc0wzMk7nX8POfS7bqt2RnfnTqnbC7CM4S3MM24QNTjqpWlrkEKVVO3o88fP1UNrtsSb2yFEVzBokR1o+hterFtAGJ9MIEsXl3lXZEkGheNG3u5pDkTJ+STl9eI5HFc2L2ChXm6PzS+kKJsOAG1ohCiDLkbR98atjt0T9hIEVYes7Ww04FqdvIjYG\\/e1SbAN9Z1nMSUU7pH5UdJSJtQEsP2ob4Wz5lRftVXlUGcEBG39elX1nBme\\/Fcy1qnW8I0Y1inP\\/kKjG4h6PCF76EeOK3tOiBhkZbwmJKZNP35dhG2mn94Zzo5gavIcTJnGHlrgfv08cU\\/G7QSMOh9WdD5vscQ1iTElbrboOFfDZXFaTlR3w7XqVDuZ3Ms594WoEElYj69\\/v\\/hgB0m3JVRYJZ7BtKgSHgCspduLOBSESP20XS8lG1IEL8PNYs1CcdXvJJ4MIi2WbG9fTLVXbg+QvKca35kQaporU\\/V6nTDSYVn+VWK32ph8FkucNMgTpp49nvRWe4S3UnouHL\\/J+5NSS4NB29eb+zLyxZZtX0ISzzWQ1Xq8RT\\/eBUkalYvtWRVtITEy29X+E6yj6TIgCMjpvI4+8Hucsg+V7sV4\\/L8JwM2nfv1DRklRZz+9eW+CES4hKgjCs5q\\/oTOM1EkjNuGS9WzaBFCWCSXGGYM6ypuDFz4ietsbtKpc9kGLVoVUz2WkiylBrUhQoeLj8tx+fJI4OEeboCYey1LRVHZd2Pqt5QAqwk\\/WBlrNWr0gxNLnkbcvZoo0XG2JNWJ9RsJWJuG4Q55X0sZ5v6KlDHUqEnwjQ71XMUt5bDoD9DWIr70JglefMH4aXl1O9YUKZ5FkqgW7hU6kzrywyg0L9KggDUfcgF5HTjj9jMDZhlwJBCFBSJfjpixVUp3pHQtcuMNW5\\/gxQLIx6+91sC5yyUDmVOPN6LwGGpcioUpNz5sMMXku1P1lA3gYFY\\/jhtprObwnZw\\/HhcTMBtS4rJFCuwN\\/NH\\/mTEA4Bq42AmXM8B\\/SEoHcgcfZyK203aa\\/ZVEvAD\\/hm9ekLOMH6NhyZjdmesruLeAeZ8hoX8XRsgjebGLnLcCACpKpoQAXnkke4h7j1CwEEpuT5HyZmt4L+X4W3Ojx642zRuV8LhduRSWHINY0g2ou2OnbDtE9KRuFC6nHpRpfX4UKwQ7g9cPslXqEdE\\/h9hQ7vgV2n2qQCMWIWzRVHUNfItiocFMtOPUSOroTR\\/sdqGFzRY4d5O2+5+zrin1WiyUGtaSgLBvqDztgOkhwzoVmf53itEn7YY2ZRG+wvAekOC2wo\\/kQcUQWlsTLq5qs6DFjBB4y6gVKPoCVl0GKZwSgh\\/NtLVd5iLBHx8hVYrGxJAIgHsf\\/f2iOQchSjA2kUXxmfmW2dMNB33MraQ4pki\\/hipvNFKMO3bSNIOusci2I8X0wAlxA0u99JajGlAXHt9tbl9IB39deK\\/S96X1LnMj3Q6NTsCbD9bTLRZPlEuGifRqekEmqxDo7EUMBEEyPjz905bm0cSeE0k0btHGTZCdxTyVkaODEfGptXtNfqi+XFIefx9UpNuIc5omEYMuvqvisiCchMZZksMOO+i+mSBA0fIw5+3xjWQpnKM0Ge9QdOZv7oNQErhqafaXWEZrhY0pC5+rgcE4mnbJZDv\\/Ey2dox3Q4jBJ+ZsTP+v4dOrSJAsQUUpo2xSFc082HdXlWcfiuR\\/TpmjQeYmYPZjOENbz+0Bymffp88WytGNEKY3cy+VGlJRj82I4mIMd5DOazbuSYAiRycLxj0\\/HRl\\/IWM4d0eemX++pzT\\/X7mvk9lhV9FpOl3a3GYf646Ix96ju9arHqzM12VYHUKsN+J22L0SltkkCxDLUI\\/vOTgzkFr6+7PiTkHY43uNPfTrqXewXWfQC\\/VkxH\\/lL7zdjkXxTdKbWs1TO+1Lg5jE7JUq7Idyx1u\\/PLCY8Aa082hV1x3hcTr1hgZqm1D5iGdguJ9X3BtxtQap9bgxhQ+gdT0SnsScfJEWMIxo7eP8GBC0VwiUPOy37obNAw8GCeXIO7kGvpHbQ8AfNN3rRru91yh1aubRXTeEJKwa69weGeprnRmeZbfCUcC9GWhmTCvOHTrAsaGPs95BpNSB6s\\/s8FTIpTThZ8A4i\\/orPTeozKpUzykLnE8x1a2QRWj8vidNDHdbshxzwSJrDWLR6gXBMasNMmZELuzPVfHA9ZelI7YKZjLqwlhJIxUlVO6Ardev1rs7Whdt5byFZ06BrxSqFaC47WlnzXpOOUuxScmUQRDQZaONg9K16Y7MgG19yYybvA+JDwvVA1niA03IKdj+4weLhmy8yaRFns6R9m\\/8F\\/XrlB2I0k4k2SDYo9CGZVAyo\\/zFtFDVIuv1GcbGaOFRoCAGzV+Gws7Unb9Ea5qxvHwrpje1tXpo7\\/j\\/zmLt+pwVYyfbruTKnM4rorml7l6eb5feasJKo6I\\/\\/E3o46JFYrOsgMorP\\/moewPKyXgh8CtfpJ16PV\\/uQXEFUOizwjlkt2KuAxUzmILDOvVS6FaYWbtCmWgtaFk2aFsCRiQYccDUihiZSGbfqdK6swXnVWyewypFjSmOX3bUzcWQ+HPVVEIyr3Eebm1LmKB9aXWY7S5nqcA9gzBBHXOGd2kKT+ULhuKc+djbANNJ7sDnmSzIWyozWrdENoJ\\/kBmR1gHNijlEQxGULkCG3TADOk+27imMau5A5ooyfz5ZBndOG9z5FlyDdPmnJ8QlQ5GFJhTeduSpZoyt5nSlyrTk8FHRBuriPbq+CZIDZ5fzPqt1TKqEf\\/HoUnfH\\/7Gx+\\/CNqBEdLlIkihmSHKWruwcZNUYABVrLzPsT+v0BOPKlOQHgfceOtw\\/xMTdssL\\/+UTo7ffCl6ySssIyNKQt49CMMeZ37JnPoovESrFhmRiROpOKrDnmvNMe+vPaMUGPLVkpoZBOP65W\\/CDzhjG87c2ja7H6mu771zbBI86k0nVrREcWy05zrNpsbs9Pf7RyUXk0jSJxhsFwnElAqtWL8X3NBtfHtxfeLJQiBJH93s2jE7\\/IiFvFrqZGF\\/v4XsSRKGj3YJHRd8rhHBSi0waoQx8o9QH5r3d1HaCn7OhIusrtoErcrx5sA1NoHH8vaPD78csJIUi8JUOl5TdqJkE756LGpFdufsO0qRzgjR0iUu\\/elqYykY1tsHhUBUPHqK8GGoTt3UsVZfgdYYdvmw3weO5q9mec+mzUekU0aPIsagXzLztsk1gLv9qgiUW\\/Woerz\\/8HEDP1ilNF8FqknBPCQJOTrO4Dcbacp5Cw4DJUxlN2DkorvYNhEsOCcDRm2XqAw1IPM1xzdnuxH0ivpSqymLG4flwEz0uiaQsUJgxnCXEP4gVz3jK5wkzuOE+KWVZaERmG4NMA1P+unjdPZ6r7QzQSr64rUr6nBxpQcpxzhRVxZZCpLr9BeshiT5qhKPUtDOBgFMB\\/j3WQIKhw6Ml0opIcsEvTVk9WSr5XqULm4l6h5fi9xaTN0pnuu4pc8RoGWhexalrPLOyMd5x8jYBHcXDcd9wr0WrGm0+7voOZIed222lT3k6dtpgpu0ski6I7uzA7UvS6Q3ZSVy9ZnDjT9\\/izdVWRxajHxUldU1Zig6NBmeO8OSXjvtSySiiOF3m9OvRtyZ346pLwKy4bnZaHtHQQ96xlTnMJMp\\/HAake10nGFFWHHu\\/WVDYc21l3PHOW9B9EXeW3qD5lNzYV3frg\\/ND\\/RCWRrMpHBiKrWS9\\/MjgDFPZPKpJ08OKbwCQpXNHDVsHRcuHbNq14uNrqirsD3F40SDuArKA3IYTjh\\/zFxtCwGciSwu9upbcM7k3EKmU7Oxr9jOhiRVtxsAkCUYeR2PWZRsPJGY1OS55vYVfRiXdrfWpPoA2oL8XX5At3kMfqG3usgs4h6a8uQOztaverEte4bFdaFcl9XxIotMDCJYwfNe1bEM54Wlp5+6pcXT4Wm5CoARsqPu6qzVzRdbudBODu\\/qNOHwH8lctGmGnJzAEAKNpyedsDzigyN7BjHyNSMNuhQ4bFx5l\\/5jW\\/rt+MGKjp8Rbm1COi1OWWMaow6wwnWXNEMPAMzOXSz8S6VTTAolPlfKyAx5A+Jjd9+ZQeUEv4IvJ2Oy5yjg\\/yM0YEhQghz8gTnghnsihulSRvx0JR+Ci6MgsnfMRi7yxKieHYCHtPmsInUT+oTVsQkepeHhLRmgM\\/K+CusBhq8g\\/Vt\\/XaNymXYUIFAhOuULra\\/rD1InmCaw6kmh5NkkWleu3nE95JUd0UJV9qK4DBpj536+PONLUovzK6ln0MAKXCl\\/ih62aaOHZ+oNBovHSAJ5IZ4u7NFS2jtuW6qGNIkfZULZDFGMNwcB40nu3lyOwgzsP0ztkAYxDnLPSkT4095vwEXQLVNeWIC4nP3nJPGdyM9CkIX8hIE82dUqSO19IcNPIsxxqYg6I82fsIc5Oxy5iRkmaV+xW4ErsaByT9bTilky+Ydy8pHK0DB0kvjdN8VHfETSNBQzij0vG5kF6c1w1fZDa\\/cMOYR42JSxjkidMJzBkzg3sGPflpaI7vNTU3oyRMTBVZlCu7KbeNxqwLvutlmg6qb6eBLy3z7J4eQm07QiLCXK1bHmYOdV\\/Kj0OZ5EJCLOFiSZ8MD8fh4SgERHgjpWyKCi8iSetc0gy3mmVinJ8YvnAI6\\/T3eZ3GAjkOXoIrxnjptTmBgtCbbBPI+FWEX3MoJ8i6py5oPMgqt0wDZmEgziuptVKF9l2ltgIiJcnylX7lTiteNzPWk1NkLN6eIPb99+aDuX+fF8p9I\\/OIUvii1e7aKBUEs=\",\"cypher\":2}";
        const request = {
            url: url,
            headers: headers,
            body: body
        };

        $.post(request, async(error, response, data) => {
            try {
                $.log(data);
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}
  
  

    
  

  




  

function drawreward430() {
    return new Promise((resolve, reject) => {
         const url = "https://ocean.shuqireader.com/api/activity/activity/v1/lottery/draw?asac=2A20C07RJ9F51AOEFSNHDR";
         const headers = {
    "Origin": "https://render-web.shuqireader.com",
    "Accept-Encoding": "gzip, deflate, br",
    "Connection": "keep-alive",
    "Content-Type": "application/x-www-form-urlencoded",
    "Accept": "application/json, text/plain, */*",
    "Host": "ocean.shuqireader.com",
    "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_4_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/18D70 AliApp(shuqi/4.3.0.0) WindVane/8.6.1 Shuqi (iPhone8,2__shuqi__v4.3.0.0) 1242x2208 Winding(WV_4) WK",
    "Referer": "https://render-web.shuqireader.com/render/wx-activity/page/lottery_page_red_package_rain/?serviceWorkerOn=1&asac=2A20C07RJ9F51AOEFSNHDR&spm=a2oun.page_render_sq_welfare_welfare_page_v2.%E6%8B%9B%E8%B4%A2%E7%8C%AB.turntable_in_0&sdk=14.4.2&utdid=YEtyfcggOGwDACftENKj3%2FDe&ustatus=1&first_placeid=111111&net_env=wifi&placeid=111111&user_id=2063328969&sn=5C9DB73CC1031E31020948144EF9017F6FFF7822&umidtoken=YEtyfcggOGwDACftENKj3%2FDe&msv=8.0.0&brand=Apple&imei=F20A17EF07C45F86552D64B26BE2C4E63B34FF1B&skinVersionPrefix=1&appVer=4.3.0.0&skinActiveColor=0F9970&manufacturer=Apple&session=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDYzMzI4OTY5IiwidXRkaWQiOiIiLCJpbWVpIjoiRjIwQTE3RUYwN0M0NUY4NjU1MkQ2NEIyNkJFMkM0RTYzQjM0RkYxQiIsInNuIjoiNUM5REI3M0NDMTAzMUUzMTAyMDk0ODE0NEVGOTAxN0Y2RkZGNzgyMiIsImV4cCI6MTYzNjY3NTk3MSwidXNlcklkIjoiMjA2MzMyODk2OSIsImlhdCI6MTYzNjE1NzU3MSwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.FayDca823CcZ24guxYbgycUetgaC3XPAqam5OmiLvCE5DSYVPS0nAeCxLXaAcOJ_BayA9mGGIzDL0Er0qp34pQ&skinColor=23B383&platform=iOS&ver=210107&mod=iPhone6splus&statusBarHeight=20.000000&skinVersion=1&wh=1242x2208&soft_id=21&utype=vip&skinId=999&idfa=EA051797-0BB3-41B7-B5BB-6FE2B00D3DC0",
    "Content-Length": "2081",
    "Accept-Language": "zh-cn"
};
         const body = "activityId=311&lotteryNum=1&sessionId=1&useGoldcoinType=0&wua=HIVW_57EpLKn3yyk2L04v%2BxoguQA8HVh7RSf8CtPZbMomHXSvbvUqJhAbe9rXUuW5EHobcYbgQd53NW21FIGV9qd74g8x8cqsPTljbI%2B15fRtbqqEvS%2BjYnmPRPT6DqSkVmtdYpmT9iKej5wunxwkgnnMKDKxeEa1qCoaTgn%2FhFeDkzDqEdogZwRSmBwnj9snZdA%2BPFSbFZbRCBmZiPcSH%2Bn3RP1NDeXmV7YPKkRsDrif6pp5F5YfeQyD0s3SKwFTnn%2FLCRk4qQHCDyvU1yCiioul60tdBEv7ACR5tx5DbLqrJ7GOal3BKGTzOPWkW%2Bt6XFB95dDamfz2h7vELeyM%2FUVWgOQ7nnF6o5hE2DfrqFUvKw3VHFgevzT4tHnrFCSDqj3H&miniWua=HHnB_CoeRJVn%2BsmFj3E7nL8KqTsB639BmaG1L1qF8BYlFYyhVm0h%2BHYjzQaBYX0kWKid5uWKSH%2F7%2F0FWyAyVT4RXwYzqG0OSiOnI7CBI1kXXJ3FFEN4qAnb%2FDI0eas25MqbMa&userId=2063328969&umidtoken=YEtyfcggOGwDACftENKj3%2FDe&secureDeviceType=ios&secureAppName=wenxue-activity-proxy&platform=1&appVer=4.3.0.0&placeId=111111&timestamp=1636157640&sqSv=1.0&sign=ef20de04e99991d143db47a801d5793d&key=sq_h5_gateway&_public=serviceWorkerOn%3D1%26asac%3D2A20C07RJ9F51AOEFSNHDR%26spm%3Da2oun.page_render_sq_welfare_welfare_page_v2.%25E6%258B%259B%25E8%25B4%25A2%25E7%258C%25AB.turntable_in_0%26sdk%3D14.4.2%26utdid%3DYEtyfcggOGwDACftENKj3%252FDe%26ustatus%3D1%26first_placeid%3D111111%26net_env%3Dwifi%26placeid%3D111111%26user_id%3D2063328969%26sn%3D5C9DB73CC1031E31020948144EF9017F6FFF7822%26umidtoken%3DYEtyfcggOGwDACftENKj3%252FDe%26msv%3D8.0.0%26brand%3DApple%26imei%3DF20A17EF07C45F86552D64B26BE2C4E63B34FF1B%26skinVersionPrefix%3D1%26appVer%3D4.3.0.0%26skinActiveColor%3D0F9970%26manufacturer%3DApple%26session%3DeyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMDYzMzI4OTY5IiwidXRkaWQiOiIiLCJpbWVpIjoiRjIwQTE3RUYwN0M0NUY4NjU1MkQ2NEIyNkJFMkM0RTYzQjM0RkYxQiIsInNuIjoiNUM5REI3M0NDMTAzMUUzMTAyMDk0ODE0NEVGOTAxN0Y2RkZGNzgyMiIsImV4cCI6MTYzNjY3NTk3MSwidXNlcklkIjoiMjA2MzMyODk2OSIsImlhdCI6MTYzNjE1NzU3MSwib2FpZCI6IiIsInBsYXRmb3JtIjoiaU9TIn0.FayDca823CcZ24guxYbgycUetgaC3XPAqam5OmiLvCE5DSYVPS0nAeCxLXaAcOJ_BayA9mGGIzDL0Er0qp34pQ%26skinColor%3D23B383%26platform%3D1%26ver%3D210107%26mod%3DiPhone6splus%26statusBarHeight%3D20.000000%26skinVersion%3D1%26wh%3D1242x2208%26soft_id%3D21%26utype%3Dvip%26skinId%3D999%26idfa%3DEA051797-0BB3-41B7-B5BB-6FE2B00D3DC0";
        const request = {
            url: url,
            headers: headers,
            body: body
        };

        $.post(request, async(error, response, data) => {
            try {
                $.log(data);
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}
  
  

    

  

  





function Env(t, e) {
    class s {
        constructor(t) {
            this.env = t
        }
        send(t, e = "GET") {
            t = "string" == typeof t ? {
                url: t
            }
                : t;
            let s = this.get;
            return "POST" === e && (s = this.post),
                new Promise((e, i) => {
                    s.call(this, t, (t, s, r) => {
                        t ? i(t) : e(s)
                    })
                })
        }
        get(t) {
            return this.send.call(this.env, t)
        }
        post(t) {
            return this.send.call(this.env, t, "POST")
        }
    }
    return new class {
        constructor(t, e) {
            this.name = t,
                this.http = new s(this),
                this.data = null,
                this.dataFile = "box.dat",
                this.logs = [],
                this.isMute = !1,
                this.isNeedRewrite = !1,
                this.logSeparator = "\n",
                this.startTime = (new Date).getTime(),
                Object.assign(this, e),
                this.log(`\n${this.name}\u811a\u672c,\u5f00\u59cb\u6267\u884c:`)
        }
        isNode() {
            return "undefined" != typeof module && !!module.exports
        }
        isQuanX() {
            return "undefined" != typeof $task
        }
        isSurge() {
            return "undefined" != typeof $httpClient && "undefined" == typeof $loon
        }
        isLoon() {
            return "undefined" != typeof $loon
        }
        toObj(t, e = null) {
            try {
                return JSON.parse(t)
            } catch {
                return e
            }
        }
        toStr(t, e = null) {
            try {
                return JSON.stringify(t)
            } catch {
                return e
            }
        }
        getjson(t, e) {
            let s = e;
            const i = this.getdata(t);
            if (i)
                try {
                    s = JSON.parse(this.getdata(t))
                } catch { }
            return s
        }
        setjson(t, e) {
            try {
                return this.setdata(JSON.stringify(t), e)
            } catch {
                return !1
            }
        }
        getScript(t) {
            return new Promise(e => {
                this.get({
                    url: t
                }, (t, s, i) => e(i))
            })
        }
        runScript(t, e) {
            return new Promise(s => {
                let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
                i = i ? i.replace(/\n/g, "").trim() : i;
                let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
                r = r ? 1 * r : 20,
                    r = e && e.timeout ? e.timeout : r;
                const [o, h] = i.split("@"),
                    a = {
                        url: `http://${h}/v1/scripting/evaluate`,
                        body: {
                            script_text: t,
                            mock_type: "cron",
                            timeout: r
                        },
                        headers: {
                            "X-Key": o,
                            Accept: "*/*"
                        }
                    };
                this.post(a, (t, e, i) => s(i))
            }).catch(t => this.logErr(t))
        }
        loaddata() {
            if (!this.isNode())
                return {}; {
                this.fs = this.fs ? this.fs : require("fs"),
                    this.path = this.path ? this.path : require("path");
                const t = this.path.resolve(this.dataFile),
                    e = this.path.resolve(process.cwd(), this.dataFile),
                    s = this.fs.existsSync(t),
                    i = !s && this.fs.existsSync(e);
                if (!s && !i)
                    return {}; {
                    const i = s ? t : e;
                    try {
                        return JSON.parse(this.fs.readFileSync(i))
                    } catch (t) {
                        return {}
                    }
                }
            }
        }
        writedata() {
            if (this.isNode()) {
                this.fs = this.fs ? this.fs : require("fs"),
                    this.path = this.path ? this.path : require("path");
                const t = this.path.resolve(this.dataFile),
                    e = this.path.resolve(process.cwd(), this.dataFile),
                    s = this.fs.existsSync(t),
                    i = !s && this.fs.existsSync(e),
                    r = JSON.stringify(this.data);
                s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r)
            }
        }
        lodash_get(t, e, s) {
            const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
            let r = t;
            for (const t of i)
                if (r = Object(r)[t], void 0 === r)
                    return s;
            return r
        }
        lodash_set(t, e, s) {
            return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t)
        }
        getdata(t) {
            let e = this.getval(t);
            if (/^@/.test(t)) {
                const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t),
                    r = s ? this.getval(s) : "";
                if (r)
                    try {
                        const t = JSON.parse(r);
                        e = t ? this.lodash_get(t, i, "") : e
                    } catch (t) {
                        e = ""
                    }
            }
            return e
        }
        setdata(t, e) {
            let s = !1;
            if (/^@/.test(e)) {
                const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e),
                    o = this.getval(i),
                    h = i ? "null" === o ? null : o || "{}" : "{}";
                try {
                    const e = JSON.parse(h);
                    this.lodash_set(e, r, t),
                        s = this.setval(JSON.stringify(e), i)
                } catch (e) {
                    const o = {};
                    this.lodash_set(o, r, t),
                        s = this.setval(JSON.stringify(o), i)
                }
            } else
                s = this.setval(t, e);
            return s
        }
        getval(t) {
            return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null
        }
        setval(t, e) {
            return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null
        }
        initGotEnv(t) {
            this.got = this.got ? this.got : require("got"),
                this.cktough = this.cktough ? this.cktough : require("tough-cookie"),
                this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar,
                t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar))
        }
        get(t, e = (() => { })) {
            t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]),
                this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
                    "X-Surge-Skip-Scripting": !1
                })), $httpClient.get(t, (t, s, i) => {
                    !t && s && (s.body = i, s.statusCode = s.status),
                        e(t, s, i)
                })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
                    hints: !1
                })), $task.fetch(t).then(t => {
                    const {
                        statusCode: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    } = t;
                    e(null, {
                        status: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    }, o)
                }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
                    try {
                        if (t.headers["set-cookie"]) {
                            const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                            this.ckjar.setCookieSync(s, null),
                                e.cookieJar = this.ckjar
                        }
                    } catch (t) {
                        this.logErr(t)
                    }
                }).then(t => {
                    const {
                        statusCode: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    } = t;
                    e(null, {
                        status: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    }, o)
                }, t => {
                    const {
                        message: s,
                        response: i
                    } = t;
                    e(s, i, i && i.body)
                }))
        }
        post(t, e = (() => { })) {
            if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon())
                this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
                    "X-Surge-Skip-Scripting": !1
                })), $httpClient.post(t, (t, s, i) => {
                    !t && s && (s.body = i, s.statusCode = s.status),
                        e(t, s, i)
                });
            else if (this.isQuanX())
                t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
                    hints: !1
                })), $task.fetch(t).then(t => {
                    const {
                        statusCode: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    } = t;
                    e(null, {
                        status: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    }, o)
                }, t => e(t));
            else if (this.isNode()) {
                this.initGotEnv(t);
                const {
                    url: s,
                    ...i
                } = t;
                this.got.post(s, i).then(t => {
                    const {
                        statusCode: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    } = t;
                    e(null, {
                        status: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    }, o)
                }, t => {
                    const {
                        message: s,
                        response: i
                    } = t;
                    e(s, i, i && i.body)
                })
            }
        }
        time(t) {
            let e = {
                "M+": (new Date).getMonth() + 1,
                "d+": (new Date).getDate(),
                "H+": (new Date).getHours(),
                "m+": (new Date).getMinutes(),
                "s+": (new Date).getSeconds(),
                "q+": Math.floor(((new Date).getMonth() + 3) / 3),
                S: (new Date).getMilliseconds()
            };
            /(y+)/.test(t) && (t = t.replace(RegExp.$1, ((new Date).getFullYear() + "").substr(4 - RegExp.$1.length)));
            for (let s in e)
                new RegExp("(" + s + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? e[s] : ("00" + e[s]).substr(("" + e[s]).length)));
            return t
        }
        msg(e = t, s = "", i = "", r) {
            const o = t => {
                if (!t)
                    return t;
                if ("string" == typeof t)
                    return this.isLoon() ? t : this.isQuanX() ? {
                        "open-url": t
                    }
                        : this.isSurge() ? {
                            url: t
                        }
                            : void 0;
                if ("object" == typeof t) {
                    if (this.isLoon()) {
                        let e = t.openUrl || t.url || t["open-url"],
                            s = t.mediaUrl || t["media-url"];
                        return {
                            openUrl: e,
                            mediaUrl: s
                        }
                    }
                    if (this.isQuanX()) {
                        let e = t["open-url"] || t.url || t.openUrl,
                            s = t["media-url"] || t.mediaUrl;
                        return {
                            "open-url": e,
                            "media-url": s
                        }
                    }
                    if (this.isSurge()) {
                        let e = t.url || t.openUrl || t["open-url"];
                        return {
                            url: e
                        }
                    }
                }
            };
            this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r)));
            let h = ["", "==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];
            h.push(e),
                s && h.push(s),
                i && h.push(i),
                console.log(h.join("\n")),
                this.logs = this.logs.concat(h)
        }
        log(...t) {
            t.length > 0 && (this.logs = [...this.logs, ...t]),
                console.log(t.join(this.logSeparator))
        }
        logErr(t, e) {
            const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
            s ? this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t.stack) : this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t)
        }
        wait(t) {
            return new Promise(e => setTimeout(e, t))
        }
        done(t = {}) {
            const e = (new Date).getTime(),
                s = (e - this.startTime) / 1e3;
            this.log("", `${this.name}\u811a\u672c, \u6267\u884c\u7ed3\u675f! \u7528\u65f6${s}\u79d2`),
                this.log(),
                (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t)
        }
    }
        (t, e)
}
