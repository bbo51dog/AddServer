function copyLink() {
    if (result_form.result.value) {
        result_form.result.select();
        document.execCommand("Copy");
    }
}