(function() {var implementors = {};
implementors["ndarray"] = [{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"ndarray/struct.Axis.html\" title=\"struct ndarray::Axis\">Axis</a>",synthetic:false,types:["ndarray::dimension::axis::Axis"]},{text:"impl&lt;I:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"ndarray/struct.Dim.html\" title=\"struct ndarray::Dim\">Dim</a>&lt;I&gt;",synthetic:false,types:["ndarray::dimension::dim::Dim"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"ndarray/struct.AxisDescription.html\" title=\"struct ndarray::AxisDescription\">AxisDescription</a>",synthetic:false,types:["ndarray::dimension::axes::AxisDescription"]},{text:"impl&lt;'a, D&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"ndarray/iter/struct.Axes.html\" title=\"struct ndarray::iter::Axes\">Axes</a>&lt;'a, D&gt;",synthetic:false,types:["ndarray::dimension::axes::Axes"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"ndarray/struct.Slice.html\" title=\"struct ndarray::Slice\">Slice</a>",synthetic:false,types:["ndarray::slice::Slice"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"enum\" href=\"ndarray/enum.SliceOrIndex.html\" title=\"enum ndarray::SliceOrIndex\">SliceOrIndex</a>",synthetic:false,types:["ndarray::slice::SliceOrIndex"]},{text:"impl&lt;T, D&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"ndarray/struct.SliceInfo.html\" title=\"struct ndarray::SliceInfo\">SliceInfo</a>&lt;T, D&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;D: <a class=\"trait\" href=\"ndarray/trait.Dimension.html\" title=\"trait ndarray::Dimension\">Dimension</a>,&nbsp;</span>",synthetic:false,types:["ndarray::slice::SliceInfo"]},{text:"impl&lt;D:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"ndarray/iter/struct.Indices.html\" title=\"struct ndarray::iter::Indices\">Indices</a>&lt;D&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;D: <a class=\"trait\" href=\"ndarray/trait.Dimension.html\" title=\"trait ndarray::Dimension\">Dimension</a>,&nbsp;</span>",synthetic:false,types:["ndarray::indexes::Indices"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"enum\" href=\"ndarray/enum.ErrorKind.html\" title=\"enum ndarray::ErrorKind\">ErrorKind</a>",synthetic:false,types:["ndarray::error::ErrorKind"]},{text:"impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"enum\" href=\"ndarray/enum.FoldWhile.html\" title=\"enum ndarray::FoldWhile\">FoldWhile</a>&lt;T&gt;",synthetic:false,types:["ndarray::zip::FoldWhile"]},{text:"impl&lt;A:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"ndarray/struct.RawViewRepr.html\" title=\"struct ndarray::RawViewRepr\">RawViewRepr</a>&lt;A&gt;",synthetic:false,types:["ndarray::RawViewRepr"]},{text:"impl&lt;A:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"ndarray/struct.ViewRepr.html\" title=\"struct ndarray::ViewRepr\">ViewRepr</a>&lt;A&gt;",synthetic:false,types:["ndarray::ViewRepr"]},{text:"impl&lt;S:&nbsp;<a class=\"trait\" href=\"ndarray/trait.RawDataClone.html\" title=\"trait ndarray::RawDataClone\">RawDataClone</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>, D:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"ndarray/struct.ArrayBase.html\" title=\"struct ndarray::ArrayBase\">ArrayBase</a>&lt;S, D&gt;",synthetic:false,types:["ndarray::ArrayBase"]},{text:"impl&lt;D:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"ndarray/struct.Shape.html\" title=\"struct ndarray::Shape\">Shape</a>&lt;D&gt;",synthetic:false,types:["ndarray::Shape"]},{text:"impl&lt;D:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"ndarray/struct.StrideShape.html\" title=\"struct ndarray::StrideShape\">StrideShape</a>&lt;D&gt;",synthetic:false,types:["ndarray::StrideShape"]},];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
